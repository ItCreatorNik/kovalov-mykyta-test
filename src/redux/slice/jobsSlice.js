import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobs: [],
}

const jobsSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    STORE_JOBS: (state, action) => {
          state.jobs = action.payload.jobs
    }
  }
});

export const { STORE_JOBS } = jobsSlice.actions

export const selectJobs = state => state.job.jobs

export default jobsSlice.reducer