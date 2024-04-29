import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./movieSlice";
import authenticationReducer from "./authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    moviesList: movieListReducer,
  },
});
