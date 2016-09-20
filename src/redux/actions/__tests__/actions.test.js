/**
 * Created by jack on 16-9-19.
 */

import configureMockStore from 'redux-mock-store';

import middlewares from '../../middleware';
import actions from '../index';
import menuAtions, {QUERY_MENU_LIST} from '../menu';
import * as actionTypes from '../action_types';

describe('test actions', () => {
	const mockStore = configureMockStore(middlewares);

	it('Action: asyncIncrement()', () => {
		const store = mockStore({});
		const action = [{
			type: actionTypes.INCREMENT,
			payload: 1
		}];
		store.dispatch(actions.asyncIncrement());
		expect(store.getActions()).toEqual(action);
	});

	it('Action: asyncIncrement(number)', () => {
		const store = mockStore({});
		const number = 10;
		const action = [{
			type: actionTypes.INCREMENT,
			payload: number
		}];
		store.dispatch(actions.asyncIncrement(number));
		expect(store.getActions()).toEqual(action);
	});

	it('Action: promiseIncrement()', () => {
		const store = mockStore({});
		const action = [{
			type: actionTypes.PROMISE_INCREMENT,
			payload: 1
		}];
		return store.dispatch(actions.promiseIncrement())
			.then(() => expect(store.getActions()).toEqual(action));
	});

	it('Action: promiseIncrement(number)', () => {
		const store = mockStore({});
		const number = 10;
		const action = [{
			type: actionTypes.PROMISE_INCREMENT,
			payload: number
		}];
		return store.dispatch(actions.promiseIncrement(number))
			.then(() => expect(store.getActions()).toEqual(action));
	});

	it('Action: decrement', () => {
		const action = {
			type: actionTypes.DECREMENT
		};
		expect(actions.decrement()).toEqual(action);
	});

	it('Action: queryMenuList()', () => {
		const store = mockStore({});
		const action = [{
			type: QUERY_MENU_LIST,
			payload: [{
				path: '/a',
				name: 'a',
				label: 'Page A'
			}, {
				path: '/b',
				name: 'b',
				label: 'Page B'
			}]
		}];
		return store.dispatch(menuAtions.queryMenuList())
			.then(() => expect(store.getActions()).toEqual(action));
	});
});
