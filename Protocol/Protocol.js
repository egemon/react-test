/**
 * Created by ilukianov on 22.09.16.
 */
import React from "react";
import PlayerList from "../PlayerList/PlayerList";
import Metadata from "../Metadata/Metadata";
import Controls from "../Controls/Controls";

const Protocol = () => {
  return (
    <div className="protocol">
      <Metadata/>
      <PlayerList/>
      <Controls />
    </div>
  );
};

export default Protocol;