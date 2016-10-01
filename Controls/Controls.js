/**
 * Created by ilukianov on 30.09.16.
 */
import React from "react";
import { connect } from "react-redux";

const stateToProps = (state) => {
  return {
    show: () => {
      console.log("Game is", state);
    }
  };
};

const Controls = ({show}) => {
  return (
    <button onClick={show}>Вывести</button>
  );
};


export default connect(stateToProps)(Controls);