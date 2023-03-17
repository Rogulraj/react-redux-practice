const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports = cakeSlice;
