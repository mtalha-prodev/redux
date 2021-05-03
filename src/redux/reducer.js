import { combineReducers } from "redux";
import cakeReducer from "./buyCake/cakeReducer";
import iceCreamReducer from "./buyIceCream/iceCreamReducer";

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default reducer;
