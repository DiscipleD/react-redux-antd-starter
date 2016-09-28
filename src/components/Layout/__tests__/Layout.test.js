/**
 * Created by jack on 16-9-25.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../index';

describe('Layout Component', () => {
	it('match snapshot', () => {
		const layout = renderer.create(
			<Layout
				header="header"
				aside="aside"
				content="content"
			/>
		).toJSON();
		expect(layout).toMatchSnapshot();
	});
});
