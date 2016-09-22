/**
 * Created by ilukianov on 22.09.16.
 */
import React from 'react';
import ProtocolFieldMixin from '../ProtocolField/ProtocolField';
const Metadata = props => {
	console.log('[Metadata] render()');
	return (
		<div className="metadata">
			<label>
				Стол
				<select
					value={props.table}
					onChange={props.update.bind(this, 'table')}>
					<option>BakerStreet</option>
					<option>FleetStreet</option>
					<option>DowningStreet</option>
					<option>AbbeyRoad</option>
				</select>
			</label>
			<label>
				Дата
				<input
					type="date"
					value={props.date}
					onChange={props.update.bind(this, 'date')}/>
			</label>
			<label>
				Ведущий
				<input
					type="text"
					value={props.ref}
					onChange={props.update.bind(this, 'ref')}/>
			</label>
			<label>
				Победа
				<select
					value={props.win}
					onChange={props.update.bind(this, 'win')}>
					<option>Мирные</option>
					<option>Мафия</option>
				</select>
			</label>
			<label>
				Номер игры
				<input
					type="number"
					value={props.gameNumber}
					onChange={props.update.bind(this, 'gameNumber')}/>
			</label>
		</div>
	);
};

export default ProtocolFieldMixin(Metadata);