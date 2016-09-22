/**
 * Created by ilukianov on 22.09.16.
 */
import React from 'react';
import store from '../store';
const ProtocolFieldMixin = (Component) => class extends React.Component {
	constructor (props){
		console.log('[ProtocolFieldMixin] constructor ()', props);
		super(props);
		this.name = Object.keys(props)[0];
		console.log('[ProtocolFieldMixin] constructor ()', this.name);
		this.update = this.update.bind(this);
		this.state = this.props[this.name];
	}

	update(fieldName, event){
		// console.log('[ProtocolFieldMixin] update()');
		let fieldValue = event.target.value;
		store.dispatch({
			type: this.name.toUpperCase() + '_CHANGE',
			fieldName: fieldName,
			fieldValue: fieldValue,
			number: this.props.number
		});
		// this.state[fieldName] = fieldValue;
	}

	render(){
		// console.log('[ProtocolFieldMixin] render()');
		return (
			<Component
				update={this.update}
				{...this.props}
				{...this.state}
			/>
		);
	}
};

export default ProtocolFieldMixin;
