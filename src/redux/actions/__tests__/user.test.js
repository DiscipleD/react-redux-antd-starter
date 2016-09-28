/**
 * Created by jack on 16-9-26.
 */

import configureMockStore from 'redux-mock-store';

import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import * as userAction from '../user';

describe('Actions: user', () => {
	// Don't use routerMiddleware, which will cause error when push method called.
	const middlewares = [promiseMiddleware, thunkMiddleware]
	const mockStore = configureMockStore(middlewares);

	it('userSignIn', () => {
		const store = mockStore({});

		const user = {
			username: 'a'
		};
		const actions = [{
			type: userAction.SIGN_IN,
			payload: {
				...user,
				isLogin: true
			}
		}, {
			type: '@@router/CALL_HISTORY_METHOD',
			payload: {
				method: 'push',
				args: ['/']
			}
		}];
		return store.dispatch(userAction.userSignIn(user))
			.then(() => expect(store.getActions()).toEqual(actions));
	});

	it('userLogout', () => {
		const store = mockStore({
			username: 'a',
			isLogin: true
		});

		const actions = [{
			type: userAction.LOGOUT
		}, {
			type: '@@router/CALL_HISTORY_METHOD',
			payload: {
				method: 'push',
				args: ['/signIn']
			}
		}];
		store.dispatch(userAction.userLogout());
		expect(store.getActions()).toEqual(actions);
	});
});

