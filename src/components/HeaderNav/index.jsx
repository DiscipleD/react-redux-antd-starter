/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import {Link} from 'react-router';
import {Menu} from 'antd';

import './style.scss';
export default class HeaderNav extends React.Component {
	render() {
		return (
			<div className="header-nav">
				<div className="header-nav-wrapper">
					<div className="header-nav-logo">Project Logo</div>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={[this.props.path === '/' ? '/a' : this.props.path]}
						style={{lineHeight: '64px'}}
					>
						<Menu.Item key="/a">
							<Link to="/a">Page A</Link>
						</Menu.Item>
						<Menu.Item key="/b">
							<Link to="/b">Page B</Link>
						</Menu.Item>
					</Menu>
				</div>
			</div>
		)
	}
}
