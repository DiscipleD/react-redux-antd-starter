/**
 * Created by jack on 16-9-5.
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
	routing: routerReducer
});

export default reducers;
