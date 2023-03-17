import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const stateValues = {
  loading: false,
  userDetails: [],
  error: "",
};

const fetchUserDetails = createAsyncThunk("user/fetchUserDetails", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState: stateValues,
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      (state.loading = false), (state.userDetails = action.payload);
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      (state.loading = false),
        (state.userDetails = []),
        (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
export const fetchUserDetailsActions = fetchUserDetails;
