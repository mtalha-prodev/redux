import { REMOVE_USER, ADD_USER } from "../actionTypes";

export const addUser = (users) => {
  return {
    type: ADD_USER,
    payload: users,
  };
};

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};
