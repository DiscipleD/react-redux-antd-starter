/**
 * Created by jack on 16-9-19.
 */

import reducer from '../pageB';
import * as actionTypes from '../../actions/action_types';

describe('PageB reducer', () => {
	it('Init State', () => {
		const state = {
			counter: 0
		};
		expect(reducer(undefined, {type: ''})).toEqual(state);
	});

	it('Action type: PROMISE_INCREMENT', () => {
		const number = 20;
		const state = {
			counter: 0
		};
		const action = {
			type: actionTypes.PROMISE_INCREMENT,
			payload: number
		};
		const result = {
			counter: number
		};
		expect(reducer(state, action)).toEqual(result);
	});
});
