/**
 * Created by jack on 16-9-25.
 */

class MenuService {
	queryMenuSetting() {
		const setting = [{
			name: 'user',
			title: '导航一',
			key: 'user',
			icon: 'user',
			child: [{
				name: 'PA',
				title: '项目 A',
				key: 'PA',
				path: '/a'
			}, {
				name: 'PB',
				title: '项目 B',
				key: 'PB',
				path: '/b'
			}]
		}, {
			name: 'notification',
			title: '导航二',
			key: 'notification',
			icon: 'notification',
			child: [{
				name: 'PC',
				title: '项目 C',
				key: 'PC',
				path: '/b'
			}]
		}];
		return Promise.resolve(setting);
	}
}

export default new MenuService();
