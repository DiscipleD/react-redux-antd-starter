/**
 * Created by jack on 16-9-27.
 */

class LocalStorage {
	getItem(key) {
		const value = localStorage.getItem(key);
		return value !== 'undefined' ? JSON.parse(value) : undefined;
	}

	setItem(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	removeItem(key) {
		localStorage.removeItem(key);
	}

	get length() {
		return localStorage.length;
	}

	key(number) {
		return localStorage.key(number)
	}

	clear() {
		localStorage.clear();
	}
}

export default new LocalStorage();
