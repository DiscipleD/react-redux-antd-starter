/**
 * Created by jack on 16-9-26.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-addons-test-utils';

import Menu from '../index';

describe('Menu Component', () => {
	const menuList = [{
		name: 'user',
		title: '导航一',
		key: 'user',
		icon: 'user',
		child: [{
			name: 'PA',
			title: '项目 A',
			key: 'PA',
			path: '/a'
		}, {
			name: 'PB',
			title: '项目 B',
			key: 'PB',
			path: '/b'
		}]
	}, {
		name: 'notification',
		title: '导航二',
		key: 'notification',
		icon: 'notification',
		child: [{
			name: 'PC',
			title: '项目 C',
			key: 'PC',
			path: '/c'
		}]
	}];
	const selectedItems = [{
		name: 'user',
		title: '导航一',
		key: 'user',
		icon: 'user',
		child: [{
			name: 'PA',
			title: '项目 A',
			key: 'PA',
			path: '/a'
		}]
	}];
	const menu = <Menu menuList={menuList} selectedItems={selectedItems} />;
	const MenuElement = ReactTestUtils.renderIntoDocument(menu);
	const MenuNode = ReactDOM.findDOMNode(MenuElement);

	it('Menu active item', () => {
		expect(MenuNode.querySelectorAll('.ant-menu-item-selected').length).toBe(1);
	});

	it('Menu hidden item', () => {
		// if item doesn't display, init render will not render the subMenu.
		expect(MenuNode.querySelectorAll('.ant-menu-sub').length).toBe(1);
	});

	it('Match Snapshot', () => {
		const snapshot = renderer.create(menu).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
});
