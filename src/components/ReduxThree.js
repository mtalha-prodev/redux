import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake, buyIceCream } from "../redux/action";

function ReduxThree(props) {
  // using hook in redux to state and dispatch
  // const buyNow = useSelector((state) => {
  //   return {
  //     cake: state.cake.numOfCake,
  //     iceCream: state.iceCream.numOfIceCream,
  //   };
  // });

  // const dispatch = useDispatch();
  return (
    <div>
      {/* <h1>
        Numb of IceCream -{buyNow.iceCream} - Num of Cake {buyNow.cake}
      </h1> */}
      {/* <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button> */}
      {/* <button onClick={() => dispatch(buyCake())}>Buy Cake</button> */}
      <h1>
        Num of IceCream -{props.iceCream} Num of Cake -{props.cake}
      </h1>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cake: state.cake.numOfCake,
    iceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThree);
