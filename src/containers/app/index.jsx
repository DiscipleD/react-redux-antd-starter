/**
 * Created by jack on 16-9-5.
 */

import React from 'react';
import {Menu} from 'antd';

export default class App extends React.Component {
	render() {
		return (
			<div className="ant-layout-top">
				<div className="ant-layout-header">
					<div className="ant-layout-wrapper">
						<div className="ant-layout-logo"></div>
						<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
							<Menu.Item key="1">导航一</Menu.Item>
							<Menu.Item key="2">导航二</Menu.Item>
							<Menu.Item key="3">导航三</Menu.Item>
						</Menu>
					</div>
				</div>
			</div>
		);
	}
}
