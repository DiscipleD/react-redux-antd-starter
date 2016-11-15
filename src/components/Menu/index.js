/**
 * Created by jack on 16-9-7.
 */

import React from 'react';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';

export default React.createClass({
	getInitialState() {
		return this.getKeysFromSelectedItems(this.props.selectedItems)
	},

	componentWillReceiveProps(props) {
		this.setState(this.getKeysFromSelectedItems(props.selectedItems));
	},

	getKeysFromSelectedItems(list = []) {
		const openKeys = [];
		const selectedKeys = [];
		list.forEach(subMenu =>
			subMenu.child.forEach(menuItem => {
				openKeys.push(subMenu.key);
				selectedKeys.push(menuItem.key);
			})
		);
		return {openKeys, selectedKeys};
	},

	toggleSubMenu(e) {
		const openKey = e.key;
		const index = this.state.openKeys.findIndex(key => key === openKey);
		index > -1 ? this.state.openKeys.splice(index, 1) : this.state.openKeys.push(openKey);
	},

	render() {
		console.log('render');
		const styles = {
			height: '100%'
		};
		const {menuList} = this.props;
		const MenuContent = menuList.map(subMenu =>
			<Menu.SubMenu
				key={subMenu.key}
				title={<span><Icon type={subMenu.icon}/>{subMenu.title}</span>}
				onTitleClick={this.toggleSubMenu}
			>
				{subMenu.child.map(menuItem =>
					<Menu.Item key={menuItem.key}>
						<Link to={menuItem.path}>{menuItem.title}</Link>
					</Menu.Item>
				)}
			</Menu.SubMenu>
		);

		return (
			<Menu
				mode="inline"
				selectedKeys={this.state.selectedKeys}
				openKeys={this.state.openKeys}
				style={styles}
			>
				{MenuContent}
			</Menu>
		)
	}
});
