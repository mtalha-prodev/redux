const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// ACTON PERFORM USER
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

// ACTION CREATOR

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_USER_ERROR:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchData = () => {
  return async function (dispatch) {
    dispatch(fetchUserRequest());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      const user = res.data.map((user) => user.id);
      dispatch(fetchUserSuccess(user));
    } catch (error) {
      dispatch(fetchUserError(error.message));
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log("user ", store.getState()));
store.dispatch(fetchData());
