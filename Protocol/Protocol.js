/**
 * Created by ilukianov on 22.09.16.
 */
import React from 'react';
import Player from '../Player/Player';
import Metadata from '../Metadata/Metadata';
import store from '../store';

class Protocol extends React.Component {
	constructor (){
		super();
		this.state = store.getState();
		console.log('Protocol#constructor()', this.state);
		this.show = this.show.bind(this);
	}

	show(){
		console.log(store.getState());
	}

	render(){
		console.log('Protocol#render()');
		var Players = this.state.players.map((player, i) => {
			return <Player key={'player' + i} player={player} number={i}/>;
		});

		return (
			<div className="protocol">
				<Metadata metadata={this.state.metadata}/>
				{Players}
				<button onClick={this.show}>Вывести</button>
			</div>
		);
	}
}

export default Protocol;