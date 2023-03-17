import { createSlice } from "@reduxjs/toolkit";

import { order as cakeOrder } from "../cake/cakeSlice";

const stateValues = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: stateValues,
  reducers: {
    order: (state) => {
      state.numOfIcecreams -= 1;
    },
    restock: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/order"]: (state) => {
  //     state.numOfIcecreams--;
  //   },
  // },

  //best practice method
  extraReducers: (builder) => {
    builder.addCase(cakeOrder, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default icecreamSlice.reducer;

export const { order, restock } = icecreamSlice.actions;
