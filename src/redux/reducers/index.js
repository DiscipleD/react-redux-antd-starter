/**
 * Created by jack on 16-9-5.
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user';
import menu from './menu';

const reducers = combineReducers({
	user,
	menu,
	routing: routerReducer
});

export default reducers;
