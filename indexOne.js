const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICREAM = "BUY_ICREAM";

// action creater
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Redux action one",
  };
};

const buyIcream = () => {
  return {
    type: BUY_ICREAM,
  };
};

// initial state create
const initialState = {
  numOfCake: 10,
  numOfIcream: 20,
};

// reducer to perform
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    case BUY_ICREAM:
      return {
        ...state,
        numOfIcream: state.numOfIcream - 1,
      };
    default:
      return state;
  }
};

// console.log("redux action");

const store = createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update State", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcream());
store.dispatch(buyIcream());

unsubscribe();
