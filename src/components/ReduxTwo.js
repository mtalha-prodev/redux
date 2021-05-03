import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/action";

function ReduxTwo() {
  const cake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cake - {cake}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default ReduxTwo;
