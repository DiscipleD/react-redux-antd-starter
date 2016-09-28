/**
 * Created by jack on 16-9-27.
 */

import storageMock from '../../../../test/mock/storageMock';
import LocalStorage from '../LocalStorage';

describe('Util: LocalStorage', () => {
	beforeEach(() => {
		window.localStorage = storageMock();
	});

	it('Item type: undefined', () => {
		const key = 'test';
		const value = undefined;
		LocalStorage.setItem(key, value);
		expect(window.localStorage.getItem(key)).toEqual(value + '');
		expect(LocalStorage.getItem(key)).toEqual(value);
	});

	it('Item type: null', () => {
		const key = 'test';
		const value = null;
		LocalStorage.setItem(key, value);
		expect(window.localStorage.getItem(key)).toEqual(JSON.stringify(value));
		expect(LocalStorage.getItem(key)).toEqual(value);
	});

	it('Item type: number', () => {
		const key = 'test';
		const value = 1.5;
		LocalStorage.setItem(key, value);
		expect(window.localStorage.getItem(key)).toEqual(JSON.stringify(value));
		expect(LocalStorage.getItem(key)).toEqual(value);
	});

	it('Item type: string', () => {
		const key = 'test';
		const value = 'test';
		LocalStorage.setItem(key, value);
		expect(window.localStorage.getItem(key)).toEqual(JSON.stringify(value));
		expect(LocalStorage.getItem(key)).toEqual(value);
	});

	it('Item type: array', () => {
		const key = 'test';
		const value = [1, 'test'];
		LocalStorage.setItem(key, value);
		expect(window.localStorage.getItem(key)).toEqual(JSON.stringify(value));
		expect(LocalStorage.getItem(key)).toEqual(value);
	});

	it('Item type: object', () => {
		const key = 'test';
		const value = {
			key: 'key',
			value: 'value'
		};
		LocalStorage.setItem(key, value);
		expect(window.localStorage.getItem(key)).toEqual(JSON.stringify(value));
		expect(LocalStorage.getItem(key)).toEqual(value);
	});

	it('LocalStorage.removeItem()', () => {
		const key = 'test';
		const value = {
			key: 'key',
			value: 'value'
		};
		LocalStorage.setItem(key, value);
		expect(LocalStorage.getItem(key)).toEqual(value);
		LocalStorage.removeItem(key);
		expect(LocalStorage.getItem(key)).toEqual(null);
	});

	it('LocalStorage.length', () => {
		const key = 'test';
		const value = {
			key: 'key',
			value: 'value'
		};
		expect(LocalStorage.length).toBe(0);
		LocalStorage.setItem(key, value);
		expect(LocalStorage.length).toBe(1);
	});

	it('LocalStorage.key(number)', () => {
		const key = 'test';
		const value = {
			key: 'key',
			value: 'value'
		};
		LocalStorage.setItem(key, value);
		expect(LocalStorage.key(0)).toEqual(key);
	});

	it('LocalStorage.clear()', () => {
		const key = 'test';
		const value = {
			key: 'key',
			value: 'value'
		};
		expect(LocalStorage.length).toEqual(0);
		LocalStorage.setItem(key, value);
		expect(LocalStorage.length).toEqual(1);
		LocalStorage.clear();
		expect(LocalStorage.length).toEqual(0);
	});
});
