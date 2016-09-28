/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { goHome } from 'actions';
import { userLogout } from 'actions/user';
import { queryMenuSetting } from 'actions/menu'
import HeaderNav from 'components/HeaderNav';
import Menu from 'components/Menu';
import Layout from 'components/Layout';

const selectedItemsSelector = (list = [], path = '') =>
	list
		.map(subMenu => ({
			...subMenu,
			child: subMenu.child.filter(menuItem => menuItem.path === path)
		}))
		.filter(subMenu => subMenu.child.length > 0);

@connect(
	state => ({
		user: state.user,
		menuList: state.menu.list,
		selectedItems: createSelector(
			state => state.menu.list,
			state => state.routing.locationBeforeTransitions.pathname,
			selectedItemsSelector
		)(state)
	}), {
		goHome,
		userLogout,
		queryMenuSetting
	})
class Dashboard extends React.Component {
	componentWillMount() {
		this.props.queryMenuSetting();
	}

	render() {
		const { goHome, user, userLogout, menuList, selectedItems } = this.props;
		const logo = {
			name: 'logo',
			label: 'Logo',
			onClick: goHome
		};
		const navItems = [{
			name: 'userName',
			label: user.name
		}, {
			name: 'logout',
			label: 'Logout',
			fn: userLogout
		}];

		return (
			<Layout
				header={<HeaderNav logo={logo} navItems={navItems} />}
				aside={<Menu menuList={menuList} selectedItems={selectedItems} />}
				content={this.props.children}
			/>
		)
	}
}

export default Dashboard;
