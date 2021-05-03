import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/action";

function ReduxFour() {
  const [number, setNumber] = useState(1);
  const cake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>num of cake {cake}</h1>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>
        buy {number} cake
      </button>
    </div>
  );
}

export default ReduxFour;
