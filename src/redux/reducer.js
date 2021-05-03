import { combineReducers } from "redux";
import cakeReducer from "./buyCake/cakeReducer";
import iceCreamReducer from "./buyIceCream/iceCreamReducer";
import userReducer from "./userData/userReducer";

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default reducer;
