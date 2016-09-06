/**
 * Created by jack on 16-9-6.
 */

import React from 'react';

import HeaderNav from 'components/HeaderNav';

export default class Routers extends React.Component {
	render() {
		return (
			<section>
				<HeaderNav path={this.props.location.pathname} />
				{this.props.children}
			</section>
		)
	}
}
