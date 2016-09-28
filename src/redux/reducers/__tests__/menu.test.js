/**
 * Created by jack on 16-9-26.
 */

import menuReducer from '../menu';
import { QUERY_MENU_SETTING } from 'actions/menu';

describe('Reducer: Menu', () => {
	it('Init State', () => {
		const mockAction = {type: ''};
		const result = {
			list: []
		};
		expect(menuReducer(undefined, mockAction)).toEqual(result);
	});

	it('Action type: QUERY_MENU_SETTING', () => {
		const initState = {
			list: []
		};
		const list = [{
			name: 'a'
		}, {
			name: 'b'
		}];
		const action = {
			type: QUERY_MENU_SETTING,
			payload: list
		};
		const result = {
			list
		};
		expect(menuReducer(initState, action)).toEqual(result);
	});
});
