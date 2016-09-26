/**
 * Created by ilukianov on 22.09.16.
 */
import config from "../config";
import { createStore } from "redux";
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

const players = (state = (new Array(config.PLAYER_NUMBER)).fill(), action) => {
  switch (action.type) {
  case "PLAYER_CHANGE":
    state[action.number] = changeField(state[action.number], action);
  }
  return state;
};

const counter = (state = JSON.parse(JSON.stringify(config.GAME)), action) => {
  switch (action.type) {
  case "CLEAR":
    return JSON.parse(JSON.stringify(config.GAME));
  }
  return {
    metadata: metadata(state.metadata, action),
    players: players(state.players, action),
  };
};
const store = createStore(counter);

export default store;
