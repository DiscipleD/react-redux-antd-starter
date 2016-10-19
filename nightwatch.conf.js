/**
 * Created by jack on 16-10-16.
 */

module.exports = {
	src_folders: ['tests/e2e'],
	output_folder: 'tests/reports',
	custom_commands_path: 'tests/saucelabs',
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
			selenium_port: 4445,
			selenium_host: 'localhost',
			username: process.env.SAUCE_USERNAME,
			access_key: process.env.SAUCE_ACCESS_KEY,
			silent: true,
			screenshots: {
				enabled: false,
				path: ''
			},
			globals: {
				waitForConditionTimeout: 15000
			},
			desiredCapabilities: {
				build: `build-${process.env.TRAVIS_JOB_NUMBER}`,
				public: 'public',
				'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
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
