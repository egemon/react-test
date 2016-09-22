/**
 * Created by ilukianov on 22.09.16.
 */
import { createStore } from 'redux';
const counter = (state = {
	metadata: {},
	players: Array(10).fill().map(()=>{return {

	}})
}, action) => {
	switch (action.type) {
		case 'PLAYER_CHANGE':
			state.players[action.number][action.fieldName] = action.fieldValue;
			break;
		case 'METADATA_CHANGE':
			state.metadata[action.fieldName] = action.fieldValue;
			break;
	}
	return state;
};
const store = createStore(counter);
store.subscribe(()=> {
	console.log('subscriber()', store.getState());
});

export default store;