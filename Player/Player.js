/**
 * Created by ilukianov on 22.09.16.
 */
import React from "react";
import protocolFieldMixin from "../ProtocolField/ProtocolField";
const Player = (props) => {
  const {nick, role, bests, falls} = props.data;

  console.log("[Player] render()");
  return (
    <div >
      <label>{props.number + 1}</label>
      <input
        type="number"
        value={bests}
        onChange={props.update.bind(null, "bests")}/>
      <input
        type="text"
        value={nick}
        onChange={props.update.bind(null, "nick")}/>
      <select
        value={role || "Мирный"}
        onChange={props.update.bind(null, "role")}>
        <option>Мирный</option>
        <option>Мафия</option>
        <option>Дон</option>
        <option>Шериф</option>
      </select>
      <input
        type="range"
        value={falls}
        defaultValue={0}
        min="0" max="4"
        onChange={props.update.bind(null, "falls")}/>
    </div>
  );
};

export default protocolFieldMixin(Player);