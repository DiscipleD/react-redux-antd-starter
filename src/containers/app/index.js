/**
 * Created by jack on 16-9-7.
 */

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routers from '../../routers';

class App extends React.Component {
	render() {
		const { store, history } = this.props;
		return (
			<Provider store={store}>
				<Router history={history} routes={routers(store)}/>
			</Provider>
		)
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default App;
