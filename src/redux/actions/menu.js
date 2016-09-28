/**
 * Created by jack on 16-9-25.
 */

import { createActions } from 'redux-actions';

import { MenuService } from 'common/services';

export const QUERY_MENU_SETTING = 'QUERY_MENU_SETTING';

export const { queryMenuSetting } = createActions({
	[QUERY_MENU_SETTING]: MenuService.queryMenuSetting
});
