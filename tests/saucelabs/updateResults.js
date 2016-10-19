/**
 * Created by jack on 16-10-16.
 */

const SauceLabs = require("saucelabs");

exports.command = function () {
	const sessionid = this.capabilities['webdriver.remote.sessionid'];
	const jobName = this.currentTest.name;

	const saucelabs = new SauceLabs({
		username: process.env.SAUCE_USERNAME,
		password: process.env.SAUCE_ACCESS_KEY
	});

	saucelabs.updateJob(sessionid, {
		passed: this.currentTest.results.failed === 0,
		name: jobName
	}, function() {});

	this.end();
};
