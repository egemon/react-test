/**
 * Created by ilukianov on 22.09.16.
 */
import React from 'react';
import store from "../Store/store";
import Player from '../Player/Player';
import Metadata from '../Metadata/Metadata';

class Protocol extends React.Component {
  constructor() {
    super();
    console.log('Protocol#constructor()');
    this.show = this.show.bind(this);
  }

  show() {
    console.log(store.getState());
  }

  render(){
    console.log('Protocol#render()');
    const {players, metadata} = this.props;

    const Players = players.map((player, i) => {
      return <Player key={'player' + i}
                     type="player"
                     data={player} number={i}/>;
    });

    return (
      <div className="protocol">
        <Metadata
          type="metadata"
          data={metadata}/>
        {Players}
        <button onClick={this.show}>Вывести</button>
      </div>
    );
  }
}

export default Protocol;