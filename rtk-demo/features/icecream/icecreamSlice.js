const createSlice = require("@reduxjs/toolkit").createSlice;

const cakeActions = require("../cake/cakeSlice").actions;

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
    builder.addCase(cakeActions.order, (state) => {
      state.numOfIcecreams--;
    });
  },
});

module.exports = icecreamSlice;
