import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/action";

function UserContainerTwo() {
  const refRef = useRef(null);
  const users = useSelector((state) => state.userReducerTwo);
  const dispatch = useDispatch();

  const addUserHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(refRef.current.value));
    refRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <input type="text" placeholder="Enter your name " ref={refRef} />
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}
            <button onClick={() => dispatch(removeUser(index))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserContainerTwo;
