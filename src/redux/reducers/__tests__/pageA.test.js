/**
 * Created by jack on 16-9-19.
 */

import reducer from '../pageA';
import * as actionTypes from '../../actions/action_types';

describe('PageA reducer', () => {
	it('Init State', () => {
		const state = {
			counter: 0
		};
		expect(reducer(undefined, {type: ''})).toEqual(state);
	});

	it('Action type: INCREMENT', () => {
		const number = 20;
		const state = {
			counter: 0
		};
		const action = {
			type: actionTypes.INCREMENT,
			payload: number
		};
		const result = {
			counter: number
		};
		expect(reducer(state, action)).toEqual(result);
	});

	it('Action type: DECREMENT', () => {
		const number = 20;
		const state = {
			counter: 30
		};
		const action = {
			type: actionTypes.DECREMENT,
			payload: number
		};
		const result = {
			counter: 10
		};
		expect(reducer(state, action)).toEqual(result);
	});
});
