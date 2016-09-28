/**
 * Created by jack on 16-9-26.
 */

import { common } from '../index';

describe('Actions: common', () => {
	it('goHome', () => {
		const path = '/';
		expect(common.goHome().payload.args).toEqual([path]);
	});

	it('goSignIn', () => {
		const path = '/signIn';
		expect(common.goSignIn().payload.args).toEqual([path]);
	});
});
