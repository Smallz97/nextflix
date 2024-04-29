import { createSlice } from "@reduxjs/toolkit";
import moviesList from "../../assets/data.json";

export const movieListSlice = createSlice({
  name: "moviesList",
  initialState: {
    moviesList: moviesList,
  },
  reducers: {},
});

export default movieListSlice.reducer;
