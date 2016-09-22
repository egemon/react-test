import store from '../Store/store';
import assert from 'assert';
describe('Store', () => {
	describe('counter', () => {
		it('should change player nick', () => {
			store.dispatch({
				type: 'PLAYER_CHANGE',
				fieldName: 'nick',
				fieldValue: 'Merlin',
				number: 0
			});
			let state = {
				metadata: {},
				players: Array(10).fill().map(()=>{return {}})
			};

			state.players[0] = {
				nick: 'Merlin'
			};

			assert.deepEqual(store.getState(), state);
		});
	});
});