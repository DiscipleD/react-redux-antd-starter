/**
 * Created by jack on 16-9-5.
 */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Fetch service polyfill
import 'core-js/modules/es6.promise';

import configureStore from './redux/stores';
import './assets/style/reboot.scss';
import App from 'containers/App';
import LocalStorage from 'common/util/LocalStorage';

const getInitState = () => ({
	user: LocalStorage.getItem('user') || {}
});

const store = configureStore(getInitState());
const history = syncHistoryWithStore(browserHistory, store);

render(
	<App store={store} history={history}/>,
	document.getElementById('app')
);
