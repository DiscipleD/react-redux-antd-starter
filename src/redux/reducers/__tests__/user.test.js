/**
 * Created by jack on 2016/10/03.
 */

import userReducer from '../user';
import LocalStorage from 'common/util/LocalStorage';
import { SIGN_IN, LOGOUT } from 'actions/user';
import storageMock from '../../../../tests/mock/storageMock';

describe('Reducer: User', () => {
	beforeEach(() => {
		window.localStorage = storageMock();
	});
	it('Init State', () => {
		const mockAction = { type: '' };
		const result = {};
		expect(userReducer(undefined, mockAction)).toEqual(result);
	});

	it('Action type: SIGN_IN', () => {
		const initState = {
			isLogin: false,
			name: 'rose'
		};
		const payload = {
			isLogin: true,
			username: 'jack'
		};
		const action = {
			type: SIGN_IN,
			payload
		};
		const result = {
			isLogin: true,
			name: 'jack'
		};
		expect(userReducer(initState, action)).toEqual(result);
		expect(LocalStorage.getItem('user')).toEqual({ name: action.payload.username });
	});

	it('Action type: LOGOUT', () => {
		const initState = {
			isLogin: true,
			username: 'jack'
		};
		const action = {
			type:	LOGOUT
		};
		const result = {
			...initState,
			isLogin:	false
		};
		expect(userReducer(initState, action)).toEqual(result);
	});
});
