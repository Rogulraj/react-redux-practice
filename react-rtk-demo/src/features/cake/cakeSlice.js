import { createSlice } from "@reduxjs/toolkit";

const stateValues = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: stateValues,
  reducers: {
    order: (state) => {
      state.numOfCakes -= 1;
    },
    restock: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;

export const { order, restock } = cakeSlice.actions;
