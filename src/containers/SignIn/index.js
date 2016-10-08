/**
 * Created by jack on 16-9-7.
 */

import React from 'react';
import { connect } from 'react-redux';

import { userSignIn } from 'actions/user';
import SignInForm from 'components/SignInForm';

@connect(
	state => state,
	{ userSignIn }
)
class SignIn extends React.Component {
	render() {
		const {user} = this.props;
		return <SignInForm user={user} signIn={this.props.userSignIn} />;
	}
}

export default SignIn;
