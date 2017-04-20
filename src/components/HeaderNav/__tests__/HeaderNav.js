/**
 * Created by jack on 16-9-25.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';

import HeaderNav from '../index';

describe('HeaderNav Component', () => {
	const logo = {
		name: 'logo',
		label: 'logo',
		onClick: jest.fn()
	};
	const navItems = [{
		name: 'userName',
		label: 'aa',
		link: '/a'
	}, {
		name: 'logout',
		label: 'Logout',
		fn: jest.fn()
	}];
	const headerNav = <HeaderNav logo={logo} navItems={navItems}/>;
	const headerNavElement = ReactTestUtils.renderIntoDocument(headerNav);
	const headerNavNode = ReactDOM.findDOMNode(headerNavElement);

	it('Logo', () => {
		expect(headerNavNode.querySelector('.header-nav-logo').textContent).toBe(logo.label);

		ReactTestUtils.Simulate.click(headerNavNode.querySelector('.header-nav-logo'));
		expect(logo.onClick).toBeCalled();
	});

	it('Nav items render correct', () => {
		expect(headerNavNode.querySelectorAll('.nav-item').length).toBe(navItems.length);
	});

	it('0 nav item.', () => {
		const logo = {};
		const headerNav = ReactTestUtils.renderIntoDocument(
			<HeaderNav logo={logo}/>
		);
		const headerNavNode = ReactDOM.findDOMNode(headerNav);

		expect(headerNavNode.querySelectorAll('.nav-item').length).toBe(0);
	});

	it('match snapshot', () => {
		const headerNavSnapshot = renderer.create(headerNav).toJSON();
		expect(headerNavSnapshot).toMatchSnapshot();
	})
});
