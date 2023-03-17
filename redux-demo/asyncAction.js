const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleware = require("redux-thunk").default;

const axios = require("axios");

const fetchStatus = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};

const initialState = {
  loading: false,
  responseData: [],
  error: "",
};

const requestStage = () => {
  return { type: fetchStatus.REQUEST };
};

const successStage = (data) => {
  return {
    type: fetchStatus.SUCCESS,
    payload: data,
  };
};

const failedStage = (error) => {
  return {
    type: fetchStatus.FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchStatus.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case fetchStatus.SUCCESS:
      return {
        ...state,
        loading: false,
        responseData: [...action.payload],
      };
    case fetchStatus.FAILED:
      return {
        ...state,
        loading: false,
        responseData: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchData = () => {
  return function (dispatch) {
    dispatch(requestStage());
    axios
      .get("https://jsonplaceholder.typicode.com/user")
      .then((response) => {
        const userDetails = response.data.map((each) => each.id);
        dispatch(successStage(userDetails));
      })
      .catch((error) => {
        dispatch(failedStage(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("initial state:", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("updated state:", store.getState())
);

store.dispatch(fetchData());
