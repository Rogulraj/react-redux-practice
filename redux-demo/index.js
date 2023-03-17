const redux = require("redux");

const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const RESTOCK_CAKE = "RESTOCK_CAKE";

const BUY_ICECREAM = "BUY_ICECREAM";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    quantiy: 1,
  };
};

const restockCake = (qty) => {
  return {
    type: RESTOCK_CAKE,
    quantiy: qty,
  };
};

const buyIceCream = (qty = 1) => {
  return {
    type: BUY_ICECREAM,
    quantiy: qty,
  };
};

const restockIceCream = (qty) => {
  return {
    type: RESTOCK_ICECREAM,
    quantiy: qty,
  };
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantiy,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.quantiy,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({ cakeReducer, iceCreamReducer });

const store = createStore(rootReducers, applyMiddleware(logger));

console.log("Initial State: ", store.getState());

const unSubscribe = store.subscribe(() =>
  // console.log("Updated State: ", store.getState())
  {}
);

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(restock(2))

const actions = bindActionCreators(
  { buyCake, restockCake, buyIceCream, restockIceCream },
  store.dispatch
);

actions.buyCake();
actions.buyCake();
actions.restockCake(2);

actions.buyIceCream();
actions.buyIceCream();
actions.buyIceCream();
actions.restockIceCream(3);

unSubscribe();
