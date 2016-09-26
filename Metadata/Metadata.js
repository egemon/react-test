/**
 * Created by ilukianov on 22.09.16.
 */
import React from 'react';
import protocolFieldMixin from '../ProtocolField/ProtocolField';
const Metadata = props => {
  console.log('[Metadata] render()');
  const {
    table, date, ref, win, gameNumber
  } = props.data;

  return (
    <div className="metadata">
      <label>
        Стол
        <select
          value={table}
          onChange={props.update.bind(null, 'table')}>
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
          value={date}
          onChange={props.update.bind(null, 'date')}/>
      </label>
      <label>
        Ведущий
        <input
          type="text"
          value={ref}
          onChange={props.update.bind(null, 'ref')}/>
      </label>
      <label>
        Победа
        <select
          value={win}
          onChange={props.update.bind(null, 'win')}>
          <option>Мирные</option>
          <option>Мафия</option>
        </select>
      </label>
      <label>
        Номер игры
        <input
          type="number"
          value={gameNumber}
          onChange={props.update.bind(null, 'gameNumber')}/>
      </label>
    </div>
  );
};

export default protocolFieldMixin(Metadata);