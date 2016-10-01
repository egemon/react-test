/**
 * Created by ilukianov on 27.09.16.
 */
import React from "react";
import Player from "../Player/Player";
import { connect } from "react-redux";

const stateToProps = (state) => {
  return {
    players: state.players
  };
};

const PlayerList = (props) =>
  <div>
    {props.players.map((player, i) => {
      return (
        <Player key={"player" + i}
                player={player}
                number={i}
        />
      );
    })}
  </div>
;
export default connect(stateToProps)(PlayerList);
