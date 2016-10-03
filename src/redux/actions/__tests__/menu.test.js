/**
 * Created by jack on 16-10-03.
 */

describe('Actions: menu', () => {
	let queryMenuSetting, QUERY_MENU_SETTING;

	beforeAll(() => {
		jest.mock('common/services', () => ({
			MenuService: {
				queryMenuSetting: jest.fn(() => ({}))
			}
		}));

		queryMenuSetting = require('../menu').queryMenuSetting;
		QUERY_MENU_SETTING = require('../menu').QUERY_MENU_SETTING;
	});

	it('queryMenuSetting action', () => {
		const action = {
			type: QUERY_MENU_SETTING,
			payload: {}
		};
		expect(queryMenuSetting()).toEqual(action);
	});
});
