/**
 * Created by jack on 16-9-26.
 */

import configureStore from '../index';

describe('Stores', () => {
	it('Init stores with no params', () => {
		const store = configureStore();
		const state = {
			user: {},
			menu: {
				list: []
			},
			routing: {
				locationBeforeTransitions: null
			}
		};
		expect(store.getState()).toEqual(state);
	});

	it('Init stores with params', () => {
		const initState = {
			user: {
				username: 'aaa'
			}
		};
		const store = configureStore(initState);
		const state = {
			user: {
				username: 'aaa'
			},
			menu: {
				list: []
			},
			routing: {
				locationBeforeTransitions: null
			}
		};
		expect(store.getState()).toEqual(state);
	});
});
