import { createSlice } from "@reduxjs/toolkit";
import moviesList from "../../assets/data.json";

// Pre-processing movie data, by adding an `id` property to every object in the data array.
const initialMoviesList = moviesList.map((movie, index) => ({
  ...movie,
  id: index + 1,
}));

// Creating a seperate array specifically for bookmarked movies only.
const bookmarkedMovies = initialMoviesList.filter(
  (movie) => movie.isBookmarked
);

export const movieListSlice = createSlice({
  name: "moviesList",
  initialState: {
    moviesList: initialMoviesList,
    bookmarkedMoviesList: bookmarkedMovies,
  },
  reducers: {
    bookmarkMovie: (state, action) => {
      const movieId = action.payload;
      // checking to ensure that the payload contians valid type
      if (typeof movieId !== "number") {
        return state;
      }

      // Checking the movie list for an entry with an index that matches the id.
      const movieIndex = state.moviesList.findIndex(
        (movie) => movie.id === movieId
      );

      if (
        // Checking to ensure that a matched entry is not in the bookmarks already.
        movieIndex !== -1 &&
        !state.bookmarkedMoviesList.find(
          (bookmarkedMovie) => bookmarkedMovie.id === movieId
        )
      ) {
        // Creating a new movie list and updating the bookmark property of the entry at the matching index.
        const updatedMoviesList = state.moviesList.map((movie, index) =>
          index === movieIndex ? { ...movie, isBookmarked: true } : movie
        );

        // Creating a new movie object at the matching index of the new movie list.
        const newBookmarkedMovie = {
          ...updatedMoviesList[movieIndex],
          isBookmarked: true,
        };

        // Creating a new bookmarked movies list and updatin it with the new object at the matching index.
        const updatedBookmarkedMoviesList = [
          ...state.bookmarkedMoviesList,
          newBookmarkedMovie,
        ];

        return {
          ...state,
          // updating the state with the new lists created.
          moviesList: updatedMoviesList,
          bookmarkedMoviesList: updatedBookmarkedMoviesList,
        };
      }
    },
    removeBookmark: (state, action) => {
      // Assigning the payload to a variable.
      const movieId = action.payload;
      // Checking to ensure that the payload contians valid type
      if (typeof movieId !== "number") {
        return state;
      }
      // Checking the movie list for an entry with an index that matches the id.
      const movieIndex = state.bookmarkedMoviesList.findIndex(
        (movie) => movie.id === movieId
      );

      if (movieIndex !== -1) {
        // Creating a new movie list and updating the bookmark property of the entry at the matching index.
        const updatedMoviesList = state.moviesList.map((movie) =>
          movie.id === movieId ? { ...movie, isBookmarked: false } : movie
        );

        // Creating a new bookmarked movies list by removing the entry at the matching index from the new movies list.
        const updatedBookmarkedMoviesList = state.bookmarkedMoviesList.filter(
          (movie) => movie.id !== movieId
        );

        return {
          ...state,
          moviesList: updatedMoviesList,
          bookmarkedMoviesList: updatedBookmarkedMoviesList,
        };
      }
    },
  },
});

export const { bookmarkMovie, removeBookmark } = movieListSlice.actions;

export default movieListSlice.reducer;
