/**
 * Created by jack on 16-9-7.
 */

import React from 'react';

class Home extends React.Component {
	render() {
		const style = {
			background: '#fff',
			margin: '24px 0 0',
			position: 'relative',
			paddingTop: '24px',
			overflow: 'hidden'
		};
		return <div style={style}><h2>Welcome Home!</h2></div>;
	}
}

export default Home;
