/**
 * Created by jack on 16-9-20.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import middlewares from '../../../redux/middleware';
import Home from '../index';

describe('Home Container', () => {
	const mockStore = configureMockStore(middlewares);

	it('match snapshot', () => {
		// Because of container only includes components
		// so, it's enough to test snapshot only.
		const store = mockStore({
			menu: {},
			routing: {
				locationBeforeTransitions: {
					pathname: '/'
				}
			}
		});
		const appSnapshot = renderer.create(
			<Home store={store} />
		).toJSON();
		expect(appSnapshot).toMatchSnapshot();
	});
});
