const store = require("./app/store");

const cakeActions = require("./features/cake/cakeSlice").actions;
const icecreamActions = require("./features/icecream/icecreamSlice").actions;
const fetchUserDetailsActions =
  require("./features/user/userSlice").fetchUserDetailsActions;

console.log("Initial State:", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("Updated State:", store.getState())
);

store.dispatch(fetchUserDetailsActions());

// //cake invocked
// store.dispatch(cakeActions.order());
// store.dispatch(cakeActions.order());
// store.dispatch(cakeActions.order());
// store.dispatch(cakeActions.restock(3));

// //icecream invocked
// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.restock(3));

// //unsubscribe the listner
// unSubscribe();
