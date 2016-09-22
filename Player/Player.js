/**
 * Created by ilukianov on 22.09.16.
 */
import React from 'react';
import ProtocolFieldMixin from '../ProtocolField/ProtocolField';
const Player = props=>{
	console.log('[Player] render()');
	return (
		<div >
			<label>{props.number + 1}</label>
			<input
				type="number"
				value={props.bests}
				onChange={props.update.bind(this, 'bests')}/>
			<input
				type="text"
				value={props.nick}
				onChange={props.update.bind(this, 'nick')}/>
			<select
				value={props.role || "Мирный"}
				onChange={props.update.bind(this, 'role')}>
				<option>Мирный</option>
				<option>Мафия</option>
				<option>Дон</option>
				<option>Шериф</option>
			</select>
			<input
				type="range"
				value={props.falls}
				defaultValue={0}
				min="0" max="4"
				onChange={props.update.bind(this, 'falls')}/>
		</div>
	);
};

export default ProtocolFieldMixin(Player);