/**
 * Created by jack on 16-9-8.
 */

import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const middleware = [routerMiddleware(browserHistory), thunkMiddleware, promiseMiddleware];
process.env.NODE_ENV === 'dev' && middleware.push(createLogger());

export default middleware;
