/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import HeaderNav from 'components/HeaderNav';
import Menu from 'components/Menu';
import Layout from 'components/Layout';

@connect(state => state.routing)
class Dashboard extends React.Component {
	constructor() {
		super();
		this.goHome = this.goHome.bind(this);
	}

	goHome() {
		this.props.dispatch(push('/'));
	}

	render() {
		return (
			<Layout
				header={<HeaderNav onlogoClickFn={this.goHome} />}
				aside={<Menu path={this.props.location.pathname} />}
				content={this.props.children}
			/>
		)
	}
}

export default Dashboard;
