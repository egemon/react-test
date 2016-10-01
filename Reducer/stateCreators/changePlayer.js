/**
 * Created by ilukianov on 30.09.16.
 */
const changePlayer = (name, value, number) => {
  return {
    type: "PLAYER_CHANGE",
    name,
    value,
    number
  };
};
export default changePlayer;