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
		return (
			<section>
				<HeaderNav
					path={this.props.location.pathname}
					onlogoClickFn={this.props.goHome}
				/>
				{this.props.children}
			</section>
		)
	}
}

export default Home;
