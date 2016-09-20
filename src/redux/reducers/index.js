/**
 * Created by jack on 16-9-5.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menu from './menu';
import pageA from './pageA';
import pageB from './pageB';

const reducers = combineReducers({
	menu,
	pageA,
	pageB,
	routing: routerReducer
});

export default reducers;
