/**
 * Created by ilukianov on 26.09.16.
 */
const PLAYER_NUMBER = 10;
const PLAYER_FIELDS = ["nick", "role", "bests", "falls"];
const METADATA_FIELDS = ["table", "date", "ref", "win", "gamenumber"];
const players = (new Array(PLAYER_NUMBER))
  .fill()
  .map(() => {
    return {};
  });
export default {
  PLAYER_NUMBER,
  PLAYER_FIELDS,
  METADATA_FIELDS,
  GAME: {
    metadata: {},
    players
  }
};
