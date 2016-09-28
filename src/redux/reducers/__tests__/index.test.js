/**
 * Created by jack on 16-9-26.
 */

import reducers from '../index';

describe('Reducer: Index', () => {
	it('Init State', () => {
		const mockAction = {type: ''};
		const result = {
			user: {},
			menu: {
				list: []
			},
			routing: {
				locationBeforeTransitions: null
			}
		};
		expect(reducers(undefined, mockAction)).toEqual(result);
	});
});
