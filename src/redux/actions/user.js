/**
 * Created by jack on 16-9-9.
 */

import { createActions } from 'redux-actions';

import { UserService } from 'common/services';
import { goHome, goSignIn } from './common';

export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';

const { signIn, logout } = createActions({}, SIGN_IN, LOGOUT);

export const userSignIn = user =>
	dispatch =>
		UserService.signIn(user)
			.then(data => {
				dispatch(signIn({
					...user,
					isLogin: data
				}));
				dispatch(goHome());
			})
			.catch(console.error);

export const userLogout = () =>
	dispatch => {
		dispatch(logout());
		dispatch(goSignIn());
	};
