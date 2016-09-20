/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'antd';

import './style.scss';

class HeaderNav extends React.Component {
	render() {
		const menuItem = (this.props.navList || [])
			.map(navItem => (
				<Menu.Item key={navItem.path}>
					<Link to={navItem.path}>{navItem.label}</Link>
				</Menu.Item>
			));
		return (
			<div className="header-nav">
				<div className="header-nav-wrapper">
					<div className="header-nav-logo" onClick={this.props.onlogoClickFn}>Project Logo</div>
					<Menu
						theme="dark"
						mode="horizontal"
						selectedKeys={[this.props.path]}
						style={{lineHeight: '64px'}}
					>{menuItem}</Menu>
				</div>
			</div>
		)
	}
}

export default HeaderNav;
