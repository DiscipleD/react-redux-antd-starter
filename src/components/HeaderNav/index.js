/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { Link } from 'react-router';

import './style.scss';

class HeaderNav extends React.Component {
	render() {
		return (
			<div className="header-nav">
				<div className="header-nav-logo" onClick={() => this.props.onlogoClickFn()}>Logo</div>
				<div className="user-actions">
					<Link to="/signIn">登录</Link> | <Link to="/signIn">退出</Link>
				</div>
			</div>
		)
	}
}

export default HeaderNav;
