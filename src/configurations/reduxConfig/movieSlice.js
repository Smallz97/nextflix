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
      if (typeof movieId !== "number") {
        console.error("Invalid movie ID");
        return state;
      }
      const movieIndex = state.moviesList.findIndex(
        (movie) => movie.id === movieId
      );

      if (
        movieIndex !== -1 &&
        !state.bookmarkedMoviesList.find(
          (bookmarkedMovie) => bookmarkedMovie.id === movieId
        )
      ) {
        // Update the moviesList with the new bookmarked movie
        const updatedMoviesList = state.moviesList.map((movie, index) =>
          index === movieIndex ? { ...movie, isBookmarked: true } : movie
        );

        // Add the movie to the bookmarkedMoviesList
        const newBookmarkedMovie = {
          ...updatedMoviesList[movieIndex],
          isBookmarked: true,
        };
        const updatedBookmarkedMoviesList = [
          ...state.bookmarkedMoviesList,
          newBookmarkedMovie,
        ];

        return {
          ...state,
          moviesList: updatedMoviesList,
          bookmarkedMoviesList: updatedBookmarkedMoviesList,
        };
      }
    },
    removeBookmark: (state, action) => {
      const movieId = action.payload;
      if (typeof movieId !== "number") {
        console.error("Invalid movie ID");
        return state;
      }
      const movieIndex = state.bookmarkedMoviesList.findIndex(
        (movie) => movie.id === movieId
      );

      if (movieIndex !== -1) {
        // Update the moviesList to unbookmark the movie
        const updatedMoviesList = state.moviesList.map((movie) =>
          movie.id === movieId ? { ...movie, isBookmarked: false } : movie
        );

        // Remove the movie from the bookmarkedMoviesList
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
