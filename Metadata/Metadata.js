/**
 * Created by ilukianov on 22.09.16.
 */
import React from "react";
import { connect } from "react-redux";
// import protocolFieldMixin from "../ProtocolField/ProtocolField";
import changeMetadata from "../Reducer/stateCreators/changeMetadata";

const stateToProps = (state) => {
  return {
    metadata: state.metadata
  };
};

const dispatchToProps = (dispatch) => {
  return {
    update: (name, value) => {
      dispatch(changeMetadata(name, value));
    }
  };
};

const Metadata = ({metadata: {table, date, ref, win, gameNubmer}, update}) =>
  <div className="metadata">
    <label>
      Стол
      <select
        value={table}
        onChange={update.bind(null, "table")}
      >
        <option>BakerStreet</option>
        <option>FleetStreet</option>
        <option>DowningStreet</option>
        <option>AbbeyRoad</option>
      </select>
    </label>
    <label>
      Дата
      <input
        type="date"
        value={date}
        onChange={update.bind(null, "date")}
      />
    </label>
    <label>
      Ведущий
      <input
        type="text"
        value={ref}
        onChange={update.bind(null, "ref")}
      />
    </label>
    <label>
      Победа
      <select
        value={win}
        onChange={update.bind(null, "win")}
      >
        <option>Мирные</option>
        <option>Мафия</option>
      </select>
    </label>
    <label>
      Номер игры
      <input
        type="number"
        value={gameNubmer}
        onChange={update.bind(null, "gameNubmer")}/>
    </label>
  </div>;



export default connect(stateToProps, dispatchToProps)(Metadata);