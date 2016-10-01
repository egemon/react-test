/**
 * Created by ilukianov on 22.09.16.
 */
import React from "react";
import { connect } from "react-redux";
import changePlayer from "../Reducer/stateCreators/changePlayer";
// import protocolFieldMixin from "../ProtocolField/ProtocolField";

const dispatchToProps = (dispatch, props) => {
  return {
    update: (name, value) => {
      dispatch(changePlayer(name, value, props.number));
    }
  };
};

const Player = ({player: {nick, role, bests, falls}, update, number}) =>
  <div >
    <label>{number + 1}</label>
    <input
      type="number"
      value={bests}
      onChange={update.bind(null, "bests")}
    />
    <input
      type="text"
      value={nick}
      onChange={update.bind(null, "nick")}
    />
    <select
      value={role || "Мирный"}
      onChange={update.bind(null, "role")}
    >
      <option>Мирный</option>
      <option>Мафия</option>
      <option>Дон</option>
      <option>Шериф</option>
    </select>
    <input
      type="range"
      value={falls}
      min="0" max="4"
      onChange={update.bind(null, "falls")}
    />
  </div>;
export default connect(null, dispatchToProps)(Player);
