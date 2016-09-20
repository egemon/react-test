import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor (){
		super();
		this.state = {
			txt: 'This is state text',
			cat: 0
		};
	}

	update(e){
		this.setState({txt: e.target.value})
	}


	render(){
		return (
			<div>
				<b>{this.state.txt}</b>
				<div>

					<input type="text"
					       onChange={this.update.bind(this)}/>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
	txt: 'defult text'
};


ReactDOM.render(
	<App cat={5} />,
	document.getElementById('app')
);

// const App = ()=><h1>Stateless !</h1>;
