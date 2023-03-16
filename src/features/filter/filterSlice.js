import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "all",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    typeChanged: (state, action) => {
      state.type = action.payload;
    },
    searchText: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { typeChanged, searchText } = filterSlice.actions;
