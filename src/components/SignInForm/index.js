/**
 * Created by jack on 16-9-8.
 */

import React from 'react';
import { Input, Button } from 'antd';

import './style.scss';

export default React.createClass({
	getInitialState() {
		return {
			username: this.props.user.name,
			userpwd: ''
		}
	},

	signIn() {
		this.props.signIn(this.state);
	},

	usernameInputChange(event) {
		this.setState({username: event.target.value});
	},

	passwordInputChange(event) {
		this.setState({userpwd: event.target.value});
	},

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
							<Input
								value={this.state.username}
								onChange={this.usernameInputChange}
								size="large"
								placeholder="请输入用户名"
							/>
						</div>
						<div className="sign-form-group">
							<label className="sign-form-label">密码</label>
							<Input
								type="password"
								value={this.state.userpwd}
								onChange={this.passwordInputChange}
								size="large"
								placeholder="请输入密码"
							/>
						</div>
						<div style={styles.buttonRow}>
							<Button
								type="primary"
								size="large"
								onClick={this.signIn}
							>Sign In</Button>
						</div>
					</div>
				</form>
			</section>
		)
	}
});
