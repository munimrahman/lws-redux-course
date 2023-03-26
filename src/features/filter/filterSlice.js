const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchTerm: "",
  projects: [
    "Scoreboard",
    "Flight Booking",
    "Product Cart",
    "Book Store",
    "Blog Application",
    "Job Finder",
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      state.searchTerm = action.payload;
    },
    projectFilter: (state, action) => {
      if (
        action.payload.check &&
        !state.projects.includes(action.payload.projectName)
      ) {
        state.projects.push(action.payload.projectName);
      } else {
        state.projects = state.projects.filter(
          (project) => project !== action.payload.projectName
        );
      }
    },
  },
});

export default filterSlice.reducer;
export const { searchFilter, projectFilter } = filterSlice.actions;
