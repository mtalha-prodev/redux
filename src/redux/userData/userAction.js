import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../actionTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      const users = res.data;
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchUsersFailure(errorMsg));
    }
  };
};
