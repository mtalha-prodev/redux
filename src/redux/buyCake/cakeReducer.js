import { BUY_CAKE } from "../actionTypes";

const initialState = {
  numOfCake: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.pyload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
