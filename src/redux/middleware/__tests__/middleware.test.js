/**
 * Created by jack on 16-9-19.
 */

import productionMiddlewareList from '../index';

describe('middleware', () => {
	it('middleware list length should be 3 except env = production', () => {
		expect(productionMiddlewareList.length).toBe(3);
	});
});
