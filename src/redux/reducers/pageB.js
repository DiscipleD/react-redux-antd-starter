/**
 * Created by jack on 16-9-8.
 */

import { handleActions } from 'redux-actions';

import * as ACTION_TYPES from '../actions/action_types';

const reducer = handleActions({
	[ACTION_TYPES.PROMISE_INCREMENT]: (state, action) => ({
		counter: state.counter + action.payload
	})
}, { counter: 0 });

export default reducer;
