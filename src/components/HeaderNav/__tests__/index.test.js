/**
 * Created by jack on 16-9-18.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
// import renderer from 'react-test-renderer';
import HeaderNav from '../index';

describe('HeaderNav Component', () => {
	let headerNavNode;
	const menuSetting = [{
		path: '/a',
		name: 'a',
		label: 'Page A'
	}, {
		path: '/b',
		name: 'b',
		label: 'Page B'
	}];
	const selectedItem = menuSetting[1];
	const goHomeFn = jest.fn();

	beforeAll(() => {
		const headerNav = ReactTestUtils.renderIntoDocument(
			<HeaderNav
				navList={menuSetting}
				path={selectedItem.path}
				onlogoClickFn={goHomeFn}
			/>
		);

		headerNavNode = ReactDOM.findDOMNode(headerNav);
	});

	it('Init component nav link according to props', () => {
		expect(headerNavNode.querySelectorAll('li.ant-menu-item').length).toBe(menuSetting.length);

		expect(headerNavNode.querySelector('li.ant-menu-item.ant-menu-item-selected a').textContent).toBe(selectedItem.label);
	});

	// react-dom & react-test-renderer couldn't be import in a file
	// that will be solved in 15.4.0. ref: https://github.com/facebook/react/issues/7386
	/* it('match snapshot', () => {
		const headerNavSnapshot = renderer.create(
			<HeaderNav
				navList={menuSetting}
				path={selectedItem.path}
				onlogoClickFn={goHomeFn}
			/>
		).toJSON();
		expect(headerNavSnapshot).toMatchSnapshot();
	})*/

	it('Logo click', () => {
		ReactTestUtils.Simulate.click(headerNavNode.querySelector('.header-nav-logo'));
		expect(goHomeFn).toBeCalled();
	});

	it('no params', () => {
		const headerNav = ReactTestUtils.renderIntoDocument(
			<HeaderNav />
		);
		const headerNavNode = ReactDOM.findDOMNode(headerNav);

		expect(headerNavNode.querySelectorAll('li.ant-menu-item').length).toBe(0);
		expect(headerNavNode.querySelector('.header-nav-logo')).toBeDefined();
	});
});
