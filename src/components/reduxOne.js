import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/action";

function ReduxOne(props) {
  return (
    <div>
      <h1>Buy Cake- {props.numOfCake}</h1>
      <button onClick={props.buyCake}>Add Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ReduxOne);
