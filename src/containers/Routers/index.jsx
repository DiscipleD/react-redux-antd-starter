/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router';

import Home from 'containers/Home';
import PageA from 'containers/PageA';
import PageB from 'containers/PageB';

export default class Routers extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Home}>
					<IndexRoute component={PageA} />
					<Route path="a" component={PageA} />
					<Route path="b" component={PageB} />
				</Route>
				<Redirect from="*" to="/" />
			</Router>
		)
	}
}
