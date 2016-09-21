import React from 'react';
import ReactDOM from 'react-dom';

class Player extends React.Component {
	constructor (){
		super();
		this.update = this.update.bind(this);
	}

	update(e){
		this.props.update(e);
	}

	render(){
		return (
			<div className="player">
				<input type="number" ref="bests" onChange={this.update}/>
				<input type="text" ref="nick" onChange={this.update}/>
				<select ref="role" onChange={this.update}>
					<option value="Мирный">Мирный</option>
					<option value="Мафия">Мафия</option>
					<option value="Дон">Дон</option>
					<option value="Шериф">Шериф</option>
				</select>
				<input type="number" ref="falls" onChange={this.update}/>
			</div>
		);
	}
}

class App extends React.Component {
	constructor (){
		super();
		this.update = this.update.bind(this);
		this.show = this.show.bind(this);
		this.state = {
			players: []
		};
	}

	componentWillMount(){
		console.log('componentWllMount');
	}

	componentDidMount(){
		console.log('componentDidMount');
	}

	componentWillUnmount(){
		console.log('componentWillUnmount');
	}

	update(e) {
		console.log(e);
		console.log(this.state.players);

		this.setState({
			players:[
				{
					bests: ReactDOM.findDOMNode(this.refs.player1.refs.bests).value,
					nick: ReactDOM.findDOMNode(this.refs.player1.refs.nick).value,
					role: ReactDOM.findDOMNode(this.refs.player1.refs.role).value,
					falls: ReactDOM.findDOMNode(this.refs.player1.refs.falls).value,
				},{
					bests: ReactDOM.findDOMNode(this.refs.player2.refs.bests).value,
					nick: ReactDOM.findDOMNode(this.refs.player2.refs.nick).value,
					role: ReactDOM.findDOMNode(this.refs.player2.refs.role).value,
					falls: ReactDOM.findDOMNode(this.refs.player2.refs.falls).value,
				},
			]
		});
	}

	show(){
		console.log(this.state);
	}

	render(){
		console.log('render');
		return (
			<div className="players">
				<Player ref="player1" update={this.update}/>
				<Player ref="player2" update={this.update}/>
				<button onClick={this.show}>Вывести</button>
			</div>
		);
	}
}


ReactDOM.render(
	<App cat={5} />,
	document.getElementById('app')
);
// let tm = setTimeout(()=>{
// 	ReactDOM.unmountComponentAtNode(document.getElementById('app'));
// 	clearTimeout(tm);
// }, 1000);