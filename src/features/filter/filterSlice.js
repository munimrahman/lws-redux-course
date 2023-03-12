import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeFilter: "all",
  salaryFilter: "",
};

export const counterSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterByType: (state, action) => {
      state.typeFilter = action.payload;
    },
    filterBySalary: (state, action) => {
      state.salaryFilter = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { filterByType, filterBySalary } = counterSlice.actions;
