/**
 * Created by jack on 16-9-26.
 */

import React from 'react';

describe('index.js', () => {
	beforeAll(() => {
		jest.mock('react-router', () => ({browserHistory: jest.fn()}));
		jest.mock('react-router-redux', () => ({syncHistoryWithStore: jest.fn()}));
		jest.mock('../redux/stores', () => jest.fn());
		jest.mock('common/util/LocalStorage', () => ({ getItem: jest.fn() }));
		jest.mock('containers/App', () => () => <div>App</div>);
	});

	it('init', () => {
		document.body.innerHTML = '<div id="app"></div>';
		require('../index');
		expect(document.querySelector('#app').innerHTML).toBe('<div data-reactroot="">App</div>');
	})
});
