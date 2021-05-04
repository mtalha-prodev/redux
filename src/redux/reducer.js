import { combineReducers } from "redux";
import cakeReducer from "./buyCake/cakeReducer";
import iceCreamReducer from "./buyIceCream/iceCreamReducer";
import userReducer from "./userData/userReducer";
import userReducerTwo from "./userTwo/userReducerTwo";

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  userReducerTwo,
});

export default reducer;
