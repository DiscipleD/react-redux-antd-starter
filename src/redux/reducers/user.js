/**
 * Created by jack on 16-9-9.
 */

import { handleActions } from 'redux-actions';

import LocalStorage from 'common/util/LocalStorage';
import { SIGN_IN, LOGOUT } from 'actions/user';

const user = handleActions({
	[SIGN_IN]: (state = {}, actions) => {
		LocalStorage.setItem('user', {name: actions.payload.username});
		return {
			...state,
			isLogin: actions.payload.isLogin,
			name: actions.payload.username
		}
	},

	[LOGOUT]: (state = {}) => ({
		...state,
		isLogin: false
	})
}, {});

export default user;
