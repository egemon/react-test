/**
 * Created by ilukianov on 22.09.16.
 */
import config from "../config";
import { createStore } from "redux";
const counter = (state = JSON.parse(JSON.stringify(config.GAME)), action) => {
  switch (action.type) {
  case "PLAYER_CHANGE":
    state.players[action.number] = {
      ...state.players[action.number],
      [action.fieldName]: action.fieldValue
    };
    return state;
  case "METADATA_CHANGE":
    state.metadata = {
      ...state.metadata,
      [action.fieldName]: action.fieldValue
    };
    return state;
  case "CLEAR":
    return JSON.parse(JSON.stringify(config.GAME));
  default:
    return state;
  }
};
const store = createStore(counter);

export default store;
