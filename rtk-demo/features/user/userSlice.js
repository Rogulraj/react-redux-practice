const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const axios = require("axios");

const stateValues = {
  loading: false,
  userDetails: [],
  error: "",
};

const fetchUserDetails = createAsyncThunk("user/fetchUserDetails", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/user")
    .then((response) => {
      const details = response.data.map((user) => user.id);
    });
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
      (state.userDetails = []), (state.error = action.error.message);
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUserDetailsActions = fetchUserDetails;
