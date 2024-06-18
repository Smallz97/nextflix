import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      console.log(state.searchQuery);
    },
  },
});
export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
