/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import HeaderNav from 'components/HeaderNav';

@connect(
	state => state,
	{
		goHome: () => push('/')
	}
)
class Home extends React.Component {
	render() {
		const menuSetting = [{
			path: '/a',
			name: 'a',
			label: 'Page A'
		}, {
			path: '/b',
			name: 'b',
			label: 'Page B'
		}];
		const currentPath = this.props.location.pathname === '/' ? menuSetting[0].path : this.props.location.pathname;
		return (
			<section>
				<HeaderNav
					navList={menuSetting}
					path={currentPath}
					onlogoClickFn={this.props.goHome}
				/>
				{this.props.children}
			</section>
		)
	}
}

export default Home;
