import { configureStore } from "@reduxjs/toolkit";

// import { createLogger } from "redux-logger";
// const logger = createLogger;

import cakeReducer from "../features/cake/cakeSlice";

import icecreamReducer from "../features/icecream/icecreamSlice";

import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (defaultMiddlewares) => defaultMiddlewares().concat(logger()),
});

export default store;
