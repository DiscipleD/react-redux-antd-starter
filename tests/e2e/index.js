/**
 * Created by jack on 16-10-10.
 */

this.SIGN_IN = browser => {
	browser
		.url('localhost:8080')
		.waitForElementVisible('body', 1000)
		.assert.elementPresent(".sign-in-block form")
		.setValue('input[type=text]', 'nightwatch')
		.waitForElementVisible('button', 1000)
		.click('button')
		.pause(1000)
		.assert.containsText('.header-nav', 'nightwatch')
		.click('.header-nav .user-actions:last-child a')
		.assert.elementPresent(".sign-in-block form")
		.assert.value(".sign-in-block form input[type=text]", "nightwatch")
		.end();
};
