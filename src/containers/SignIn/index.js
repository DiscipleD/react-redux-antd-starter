/**
 * Created by jack on 16-9-7.
 */

import React from 'react';
import { connect } from 'react-redux';

import { signIn } from 'actions/user';
import SignInForm from 'components/SignInform';

@connect(
	state => state.user,
	{ signIn }
)
class SignIn extends React.Component {
	render() {
		return <SignInForm signIn={this.props.signIn} />;
	}
}

export default SignIn;
