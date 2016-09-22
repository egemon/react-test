/**
 * Created by ilukianov on 22.09.16.
 */
import React from 'react';
const ProtocolFieldMixin = (Component) => class extends React.Component {
	constructor (props){
		const name = Object.keys(props)[0];
		console.log('[ProtocolFieldMixin] constructor ()');
		super(props);
		this.update = this.update.bind(this);
		// this.onChange = this.onChange.bind(this);
		this.state = this.props[name];
	}

	update(field, event){
		console.log('[ProtocolFieldMixin] update()');
		this.state[field] = event.target.value;
	}

	// onChange(fieldName){
	// 	this.update.bind(this, fieldName);
	// }

	render(){
		console.log('[ProtocolFieldMixin] render()');
		return (
			<Component
				update={this.update}
				{...this.props}
			/>
		);
	}
};

export default ProtocolFieldMixin;
