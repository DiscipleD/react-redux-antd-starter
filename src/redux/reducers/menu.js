/**
 * Created by jack on 16-9-25.
 */

import { handleActions } from 'redux-actions';

import { QUERY_MENU_SETTING } from 'actions/menu';

const menu = handleActions({
	[QUERY_MENU_SETTING]: (state, actions) => ({
		list: actions.payload
	})
}, {
	list: []
});

export default menu;
