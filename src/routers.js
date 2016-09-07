/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Dashboard from 'containers/Dashboard';
import Home from 'containers/Home';
import PageA from 'containers/PageA';
import PageB from 'containers/PageB';
import SignIn from 'containers/SignIn';

export default function routers() {
	return (
		<Route>
			<IndexRoute component={Dashboard} />
			<Route path="/" component={Dashboard} >
				<IndexRoute component={Home} />
				<Route path="home" component={Home} />
				<Route path="a" component={PageA} />
				<Route path="b" component={PageB} />
			</Route>
			<Route path="signIn" component={SignIn}/>
			<Redirect from="*" to="/" />
		</Route>
	)
}
