/**
 * Created by jack on 16-9-5.
 */

import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from '../reducers'

const middleware = [routerMiddleware(browserHistory), thunkMiddleware];
process.env.NODE_ENV === 'production' || middleware.push(createLogger());

export default initialState => {
	const store = createStore(
		reducers,
		applyMiddleware(...middleware),
		initialState)

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
