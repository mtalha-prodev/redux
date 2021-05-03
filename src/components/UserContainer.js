import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/action";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {userData.loading ? (
        <h1>Loading...</h1>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h1>user data</h1>
          <div>
            {userData &&
              userData.users &&
              userData.users.map((user) => <p>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(UserContainer);
