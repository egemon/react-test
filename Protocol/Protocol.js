/**
 * Created by ilukianov on 22.09.16.
 */
import React from 'react';
import Player from '../Player/Player';
import Metadata from '../Metadata/Metadata';


class Protocol extends React.Component {
	constructor (){
		super();
		this.update = this.update.bind(this);
		this.show = this.show.bind(this);

		this.state = {
			metadata: {},
			players: this.getEmptyPlayers()
		};
	}

	getEmptyPlayers(){
		let arr = new Array(10).fill();
		return arr.map(()=>{
			return {};
		});
	}

	update(field, number, event) {
		this.setState({
			metadata: {},
			players: this.state.players.map((player, playerNumber)=>{
				if (playerNumber === number) {
					player[field] = event.target.value;
				}
				return player;
			})
		})
	}

	show(){
		console.log(this.state);
	}

	render(){
		console.log('[Protocol] render()');
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