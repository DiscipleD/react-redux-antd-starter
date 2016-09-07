/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import HeaderNav from 'components/HeaderNav';

@connect()
class Home extends React.Component {
	constructor() {
		super();
		this.goHome = this.goHome.bind(this);
	}

	goHome() {
		this.props.dispatch(push('/'));
	}

	render() {
		return (
			<section>
				<HeaderNav
					path={this.props.location.pathname}
					onlogoClickFn={this.goHome}
				/>
				{this.props.children}
			</section>
		)
	}
}

export default Home;
