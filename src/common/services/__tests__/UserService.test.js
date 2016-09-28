/**
 * Created by jack on 16-9-26.
 */

import UserService from '../UserService';

describe('Service: Menu', () => {
	it('signIn method', () => {
		const isLogin = true;
		expect(UserService.isLogin({isLogin})).toBe(isLogin);
	});

	it('signIn method should return a promise', () => {
		// TODO: when implement with fetch, that should be change with mock server, like sinon
		expect(UserService.signIn().then).toBeDefined();
	});
});
