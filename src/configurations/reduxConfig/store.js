import { configureStore } from "@reduxjs/toolkit";
import newUserReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    newUser: newUserReducer,
  },
});
