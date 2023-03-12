import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobs } from "./jobsAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({ typeFilter, salaryFilter }) => {
    const response = await fetchJobs(typeFilter, salaryFilter);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default counterSlice.reducer;
