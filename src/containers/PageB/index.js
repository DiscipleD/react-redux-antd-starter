/**
 * Created by jack on 16-9-6.
 */

import React from 'react';

export default class PageB extends React.Component {
	render() {
		const style = {
			background: '#fff',
			margin: '24px 0 0',
			position: 'relative',
			paddingTop: '24px',
			overflow: 'hidden'
		};
		return <div style={style}><h2>项目 B</h2></div>;
	}
}
