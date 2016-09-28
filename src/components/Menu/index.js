/**
 * Created by jack on 16-9-7.
 */

import React from 'react';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';

class SYMenu extends React.Component {
	getKeysFromSelectedItems = (list = []) => {
		const openKeys = [];
		const selectedKeys = [];
		list.forEach(subMenu =>
			subMenu.child.forEach(menuItem => {
				openKeys.push(subMenu.key);
				selectedKeys.push(menuItem.key);
			})
		);
		return {openKeys, selectedKeys};
	};


	// openKeys 设置已知 bug, 升级 Antd 至 2.0.0 后修复
	render() {
		const styles = {
			height: '100%'
		};
		const {menuList, selectedItems} = this.props;
		const {openKeys, selectedKeys} = this.getKeysFromSelectedItems(selectedItems);
		const MenuContent = menuList.map(subMenu =>
			<Menu.SubMenu
				key={subMenu.key}
				title={<span><Icon type={subMenu.icon}/>{subMenu.title}</span>}
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
				selectedKeys={selectedKeys}
				openKeys={openKeys}
				style={styles}
			>
				{MenuContent}
			</Menu>
		)
	}
}

export default SYMenu;
