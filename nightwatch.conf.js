/**
 * Created by jack on 16-10-16.
 */

module.exports = {
	src_folders: ['tests/e2e'],
	output_folder: 'tests/reports',
	custom_commands_path: '',
	custom_assertions_path: '',
	page_objects_path: '',
	globals_path: '',

	test_workers: {
		enabled: true,
		workers: 'auto'
	},

	test_settings: {
		default: {
			launch_url: 'http://localhost:8080',
			selenium_port: 80,
			selenium_host: 'ondemand.saucelabs.com',
			username: process.env.SAUCE_USERNAME,
			access_key: process.env.SAUCE_ACCESS_KEY,
			silent: true,
			screenshots: {
				enabled: false,
				path: ''
			},
			globals: {
				waitForConditionTimeout: 10000
			}
		},

		chrome: {
			desiredCapabilities: {
				browserName: 'chrome'
			}
		},

		firefox: {
			desiredCapabilities: {
				browserName: 'firefox'
			}
		},

		internet_explorer_10: {
			desiredCapabilities: {
				browserName: 'internet explorer',
				version: '10'
			}
		},

		internet_explorer_11: {
			desiredCapabilities: {
				browserName: 'internet explorer',
				version: '11'
			}
		},

		edge: {
			desiredCapabilities: {
				browserName: 'MicrosoftEdge'
			}
		}
	}
};
