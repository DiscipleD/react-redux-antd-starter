/**
 * Created by jack on 16-9-20.
 */

import reducer from '../menu';
import {QUERY_MENU_LIST} from '../../actions/menu';

describe('Menu reducer', () => {
	it('Init State', () => {
		const state = {};
		expect(reducer(undefined, {type: ''})).toEqual(state);
	});

	it('Action type: QUERY_MENU_LIST', () => {
		const state = {};
		const list = [{
			path: '/a',
			name: 'a',
			label: 'Page A'
		}, {
			path: '/b',
			name: 'b',
			label: 'Page B'
		}];
		const action = {
			type: QUERY_MENU_LIST,
			payload: list
		};
		const result = {
			list
		};
		expect(reducer(state, action)).toEqual(result);
	});
});
