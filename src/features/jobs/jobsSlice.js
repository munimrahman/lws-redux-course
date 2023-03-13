import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, fetchJobs } from "./jobsAPI";

const initialState = {
  jobs: [],
  editJob: {},
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

export const createJob = createAsyncThunk("jobs/createJobs", async (data) => {
  const response = await addJob(data);
  return response.data;
});

export const updateJob = createAsyncThunk(
  "jobs/updateJobs",
  async ({ id, data }) => {
    const response = await editJob(id, data);
    return response.data;
  }
);

export const removeJob = createAsyncThunk("jobs/removeJobs", async (id) => {
  const response = await deleteJob(id);
  return response.data;
});

export const jobsSlice = createSlice({
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
    // create job
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
    // update job
    builder
      .addCase(updateJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.jobs.findIndex(
          (job) => job.id === action.payload.id
        );
        state.jobs[index] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
    // delete job
    builder
      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
