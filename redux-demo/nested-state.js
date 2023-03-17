const redux = require("redux");
const createStore = redux.createStore;

const produce = require("immer").produce;

const bindActionCreators = redux.bindActionCreators;

const STREET_CHANGE = "STREET_CHANGE";

const STREET_UPDATE = (street) => {
  return { type: STREET_CHANGE, payload: street };
};

const userDetails = {
  name: "Rogulraj S",
  address: {
    doorNum: 007,
    street: "gandhi street",
    dist: "Tamilnadu",
  },
  contactNum: 9876543210,
};
const reducer = (state = userDetails, action) => {
  switch (action.type) {
    case STREET_CHANGE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State ", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("Updated state ", store.getState())
);

const actions = bindActionCreators({ STREET_UPDATE }, store.dispatch);

actions.STREET_UPDATE("Kovil Street");
actions.STREET_UPDATE("4 Road Street");

unSubscribe();
