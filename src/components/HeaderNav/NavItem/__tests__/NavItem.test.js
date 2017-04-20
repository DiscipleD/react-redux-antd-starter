/**
 * Created by jack on 16-9-25.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';

import NavItem from '../index';

describe('NavItem Component', () => {
	it('Plain Item', () => {
		const itemSetting = {
			name: 'a',
			label: 'aa'
		};
		const navItem = <NavItem item={itemSetting}/>;
		const navItemElement = ReactTestUtils.renderIntoDocument(navItem);
		const navItemNode = ReactDOM.findDOMNode(navItemElement);

		expect(navItemNode.textContent).toBe(itemSetting.label);
		expect(renderer.create(navItem).toJSON()).toMatchSnapshot();
	});

	it('Link Item', () => {
		const itemSetting = {
			name: 'a',
			label: 'aa',
			link: '/a'
		};
		const navItem = <NavItem item={itemSetting}/>;
		const navItemElement = ReactTestUtils.renderIntoDocument(navItem);
		const navItemNode = ReactDOM.findDOMNode(navItemElement);

		// navItemNode link doesn't include href attribute
		expect(navItemNode.querySelector('a')).toBeDefined();
		expect(renderer.create(navItem).toJSON()).toMatchSnapshot();
	});

	it('Function Item', () => {
		const itemSetting = {
			name: 'a',
			label: 'aa',
			fn: jest.fn()
		};
		const navItem = <NavItem item={itemSetting}/>;
		const navItemElement = ReactTestUtils.renderIntoDocument(navItem);
		const navItemNode = ReactDOM.findDOMNode(navItemElement);

		ReactTestUtils.Simulate.click(navItemNode.querySelector('a'));
		expect(itemSetting.fn).toBeCalled();
		expect(renderer.create(navItem).toJSON()).toMatchSnapshot();
	});
});

