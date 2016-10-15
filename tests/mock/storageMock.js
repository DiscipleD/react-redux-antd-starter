/**
 * Created by jack on 16-9-27.
 */

// Storage Mock
export default function storageMock() {
	let storage = {};

	return {
		setItem: function(key, value) {
			storage[key] = value + '';
		},
		getItem: function(key) {
			return storage[key] || null;
		},
		removeItem: function(key) {
			delete storage[key];
		},
		get length() {
			return Object.keys(storage).length;
		},
		key: function(i) {
			const keys = Object.keys(storage);
			return keys[i] || null;
		},
		clear: function () {
			storage = {};
		}
	};
}
