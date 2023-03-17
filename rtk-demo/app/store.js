const configureStore = require("@reduxjs/toolkit").configureStore;

const reduxLoggerMiddleware = require("redux-logger");
const logger = reduxLoggerMiddleware.createLogger;

const cakeReducer = require("../features/cake/cakeSlice").reducer;

const icecreamReducer = require("../features/icecream/icecreamSlice").reducer;

const userReducer = require("../features/user/userSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (defaultMiddlewares) => defaultMiddlewares().concat(logger()),
});

module.exports = store;
