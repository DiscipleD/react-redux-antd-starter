/**
 * Created by jack on 16-9-8.
 */

import { createActions } from 'redux-actions';

import * as ACTION_TYPES from './action_types';

const {
	promiseIncrement,
	increment,
	decrement
} = createActions({
	[ACTION_TYPES.PROMISE_INCREMENT]: (increment = 1) => Promise.resolve(increment)
},
	ACTION_TYPES.INCREMENT,
	ACTION_TYPES.DECREMENT);

const asyncIncrement = (value = 1) => dispatch => dispatch(increment(value));

export default {asyncIncrement, promiseIncrement, decrement};
