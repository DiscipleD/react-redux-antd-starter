/**
 * Created by jack on 16-9-7.
 */

import React from 'react';

import './style.scss';

class Layout extends React.Component {
	render() {
		const {header, aside, content} = this.props;
		return (
			<div className="layout">
				<header className="layout-header">{header}</header>
				<div className="layout-body">
					<aside className="layout-aside">{aside}</aside>
					<div className="layout-content">{content}</div>
				</div>
			</div>)
	}
}

export default Layout;
