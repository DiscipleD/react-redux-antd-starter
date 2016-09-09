/**
 * Created by jack on 16-9-9.
 */

import { handleActions } from 'redux-actions';

import { SET_USER_INFO } from 'actions/user';

const user = handleActions({
	[SET_USER_INFO]: (state, actions) => ({
		...state,
		...actions.payload
	})
}, {});

export default user;
