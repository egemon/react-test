/**
 * Created by ilukianov on 26.09.16.
 */
import moment from "moment";
const PLAYER_NUMBER = 10;
const PLAYER_FIELDS = ["nick", "role", "bests", "falls"];
const METADATA_FIELDS = ["table", "date", "ref", "win", "gamenumber"];
const players = (new Array(PLAYER_NUMBER))
  .fill()
  .map(() => {
    return {
      bests: 0,
      nick: "",
      role: "Мирный",
      falls: 0
    };
  });
export default {
  PLAYER_NUMBER,
  PLAYER_FIELDS,
  METADATA_FIELDS,
  GAME: {
    metadata: {
      table: "BakerStreet",
      date: moment().format('YYYY-MM-DD'),
      ref: "Sad",
      win: "Мирные",
      gameNubmer: 1
    },
    players
  }
};
