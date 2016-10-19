/**
 * Created by jack on 16-10-10.
 */

module.exports = {
	'SIGN_IN_OUT': client => {
		client
			.url(client.launchUrl)
			.waitForElementVisible('body', 1000)
			.assert.elementPresent(".sign-in-block form")
			.setValue('input[type=text]', 'nightwatch')
			.waitForElementVisible('button', 1000)
			.click('button')
			.pause(1000)
			.assert.containsText('.header-nav', 'nightwatch')
			.click('.header-nav .user-actions:last-child a')
			.pause(1000)
			.assert.elementPresent(".sign-in-block form")
			.assert.value(".sign-in-block form input[type=text]", "nightwatch")
			.end();
	},

	afterEach: (client, done) => {
		client.updateResults();
		setTimeout(() => done(), 1000);
	}
};
