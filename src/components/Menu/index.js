/**
 * Created by jack on 16-9-7.
 */

import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

class SYMenu extends React.Component {
	render() {
		const styles = {
			height: '100%'
		};
		const path = this.props.path;
		return (
			<Menu
				mode="inline"
				selectedKeys={[path]}
				defaultOpenKeys={['sub1']}
				style={styles}
			>
				<Menu.SubMenu
					key="sub1"
					title={<span><Icon type="user" />导航一</span>}
				>
					<Menu.Item key="/a">
						<Link to="/a">项目 A</Link>
					</Menu.Item>
				</Menu.SubMenu>
				<Menu.SubMenu
					key="sub2"
					title={<span><Icon type="notification" />导航二</span>}
				>
					<Menu.Item key="/b">
						<Link to="/b">项目 B</Link>
					</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		)
	}
}

export default SYMenu;
