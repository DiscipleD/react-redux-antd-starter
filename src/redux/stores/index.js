/**
 * Created by jack on 16-9-5.
 */

import { createStore } from 'redux'

import reducers from '../reducers'

export default initialState => {
	const store = createStore(reducers, initialState)

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
