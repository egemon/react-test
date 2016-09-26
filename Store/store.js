/**
 * Created by ilukianov on 22.09.16.
 */
import config from "../config";
import { createStore, combineReducers } from "redux";
const changeField = (object, {fieldName, fieldValue}) => {
  return {
    ...object,
    [fieldName]: fieldValue
  };
};

const metadata = (state = {...config.GAME.metadata}, action) => {
  switch (action.type) {
  case "METADATA_CHANGE":
    state = changeField(state, action);
  }
  return state;
};

const players = (state = [...config.GAME.players], action) => {
  switch (action.type) {
  case "PLAYER_CHANGE":
    state[action.number] = changeField(state[action.number], action);
  }
  return state;
};

const counter = combineReducers({
	metadata,
	players
});
const store = createStore(counter);

export default store;
