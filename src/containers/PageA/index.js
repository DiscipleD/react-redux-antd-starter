/**
 * Created by jack on 16-9-6.
 */

import React from 'react';

export default class PageA extends React.Component {
	render() {
		const style = {
			background: '#fff',
			margin: '24px 0 0',
			position: 'relative',
			paddingTop: '24px',
			overflow: 'hidden'
		};
		return <div style={style}><h1>Page A</h1></div>;
	}
}
