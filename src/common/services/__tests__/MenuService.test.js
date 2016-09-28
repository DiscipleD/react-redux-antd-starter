/**
 * Created by jack on 16-9-26.
 */

import MenuService from '../MenuService';

describe('Service: Menu', () => {
	it('queryMenuSetting method should return a promise', () => {
		// TODO: when implement with fetch, that should be change with mock server, like sinon
		expect(MenuService.queryMenuSetting().then).toBeDefined();
	});
});
