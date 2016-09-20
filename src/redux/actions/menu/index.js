/**
 * Created by jack on 16-9-19.
 */

import { createActions } from 'redux-actions';

export const QUERY_MENU_LIST = 'QUERY_MENU_LIST';

const menuSetting = [{
	path: '/a',
	name: 'a',
	label: 'Page A'
}, {
	path: '/b',
	name: 'b',
	label: 'Page B'
}];

const { queryMenuList } = createActions({
	[QUERY_MENU_LIST]: () => Promise.resolve(menuSetting)
});

export default {queryMenuList};

