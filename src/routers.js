/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import { isAuthorized, isNeedAuthorized } from 'actions/user';
import Dashboard from 'containers/Dashboard';
import Home from 'containers/Home';
import PageA from 'containers/PageA';
import PageB from 'containers/PageB';
import SignIn from 'containers/SignIn';

const getUserFromStore = store => store.getState().user;

export default store => (
	<Route>
		<IndexRoute component={Dashboard} />
		<Route path="/" component={Dashboard} onEnter={(...arg) => isNeedAuthorized(getUserFromStore(store), ...arg)}>
			<IndexRoute component={Home} />
			<Route path="home" component={Home} />
			<Route path="a" component={PageA} />
			<Route path="b" component={PageB} />
		</Route>
		<Route path="signIn" component={SignIn} onEnter={(...arg) => isAuthorized(getUserFromStore(store), ...arg)}/>
		<Redirect from="*" to="/" />
	</Route>
)
