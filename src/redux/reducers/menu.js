/**
 * Created by jack on 16-9-19.
 */

import { handleActions } from 'redux-actions';

import {QUERY_MENU_LIST} from 'actions/menu';

const reducer = handleActions({
	[QUERY_MENU_LIST]: (state, action) => ({
		list: action.payload
	})
}, {});

export default reducer;
