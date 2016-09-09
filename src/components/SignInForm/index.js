/**
 * Created by jack on 16-9-8.
 */

import React from 'react';
import { Input, Button } from 'antd';

import './style.scss';

class SignInForm extends React.Component {
	render() {
		const styles = {
			buttonRow: {
				textAlign: 'center'
			}
		};
		return (
			<section className="sign-in-block">
				<form>
					<div className="sign-form-block">
						<h2 className="sign-form-title">登录</h2>
						<div className="sign-form-group">
							<label className="sign-form-label">用户名</label>
							<Input size="large" placeholder="请输入用户名" />
						</div>
						<div className="sign-form-group">
							<label className="sign-form-label">密码</label>
							<Input size="large" type="password" placeholder="请输入密码" />
						</div>
						<div style={styles.buttonRow}>
							<Button
								type="primary"
								size="large"
								onClick={this.props.signIn}
							>Sign In</Button>
						</div>
					</div>
				</form>
			</section>
		)
	}
}

export default SignInForm;
