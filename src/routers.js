/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Home from 'containers/Home';
import PageA from 'containers/PageA';
import PageB from 'containers/PageB';

export default () => (
	<Route path="/" component={Home}>
		<IndexRoute component={PageA} />
		<Route path="a" component={PageA} />
		<Route path="b" component={PageB} />
		<Redirect from="*" to="/" />
	</Route>
)
