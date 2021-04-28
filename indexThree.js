const redux = require("redux");
const loggerRedux = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const logger = loggerRedux.createLogger();

// using middleware logger redux

// multi reducer how to combine using

const BUY_CAKE = "BUY_CAKE"; // ACTION
const BUY_ICECREAM = "BUY_ICECREAM"; // ACTION

// ACTION CREATOR
const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

//  initial state
const initialCakeState = {
  numOfCake: 10,
};
const initialIceCreamState = {
  numOfIceCream: 15,
};

// create multi reducer

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
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

    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial state ", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
