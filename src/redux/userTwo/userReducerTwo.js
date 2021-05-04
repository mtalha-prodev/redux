import { ADD_USER, REMOVE_USER } from "../actionTypes";

const initialState = {
  user: [],
};

const userReducerTwo = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, { name: action.payload }];
    case REMOVE_USER:
      return state.filter((item, id) => action.payload != id);
    default:
      return state;
  }
};

export default userReducerTwo;
