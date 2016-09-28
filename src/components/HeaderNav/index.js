/**
 * Created by jack on 16-9-6.
 */

import React from 'react';

import './style.scss';
import NavItem from './NavItem';

class HeaderNav extends React.Component {
	render() {
		const { logo, navItems: navItemsSetting } = this.props;
		const navItems = (navItemsSetting || []).map((item, key) =>
			<NavItem item={item} key={key} />
		);
		return (
			<div className="header-nav">
				<div className="header-nav-logo" onClick={logo.onClick}>{logo.label}</div>
				<ul className="user-actions">
					{navItems}
				</ul>
			</div>
		)
	}
}

export default HeaderNav;
