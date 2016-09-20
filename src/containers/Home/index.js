/**
 * Created by jack on 16-9-6.
 */

import React from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import HeaderNav from 'components/HeaderNav';
import menuActions from 'actions/menu';

@connect(
	state => ({
		...state.menu,
		currentPath: createSelector(
			state => state.menu.list,
			state => state.routing.locationBeforeTransitions.pathname,
			(list = [], pathname) => list.length === 0 ? '' : list.filter(item => item.path === pathname).length > 0 ? pathname : list[0].path
		)(state)
	}), {
		goHome: () => push('/'),
		queryMenuList: menuActions.queryMenuList
	})
class Home extends React.Component {
	componentWillMount() {
		this.props.queryMenuList();
	}

	render() {
		const menuList = this.props.list;
		return (
			<section>
				<HeaderNav
					navList={menuList}
					path={this.props.currentPath}
					onlogoClickFn={this.props.goHome}
				/>
				{this.props.children}
			</section>
		)
	}
}

export default Home;
