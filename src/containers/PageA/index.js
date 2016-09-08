/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import actions from 'actions';

@connect(
	state => state.pageA,
	actions
)
export default class PageA extends React.Component {
	render() {
		const style = {
			margin: '24px 0 0',
			position: 'relative',
			paddingTop: '24px'
		};
		return (
			<div style={style}>
				<h1>Page A</h1>
				<p>count: {this.props.counter}</p>
				<Button
					type="primary"
					onClick={() => this.props.asyncIncrement()}
				>Add with asynchronous</Button><Button onClick={() => this.props.decrement(1)}>minus</Button>
			</div>
		);
	}
}
