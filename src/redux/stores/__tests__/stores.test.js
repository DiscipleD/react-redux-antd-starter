/**
 * Created by jack on 16-9-19.
 */

import configStore from '../index';

describe('config store', () => {
	it('create store without init state', () => {
		const store = configStore();
		const state = store.getState();
		expect(state.pageA.counter).toBe(0);
	});

	it('create store with init state', () => {
		const initState = {
			pageA: {
				counter: 1
			}
		};
		const store = configStore(initState);
		const state = store.getState();
		expect(state.pageA.counter).toBe(1);
	});
});
