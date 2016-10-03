/**
 * Created by jack on 2016/10/03.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import SignInForm from '../index';

describe('component:SignInForm', () => {
	const user = {name: 'jack'};
	const signIn = jest.fn();

	const signInForm = <SignInForm user={user} signIn={signIn}/>;
	const signInFormElement = ReactTestUtils.renderIntoDocument(signInForm);
	const signInFormNode = ReactDOM.findDOMNode(signInFormElement);

	it('SignInForm active', () => {
		expect(signInFormNode.querySelectorAll('Form')).toBeDefined();
	});

	it('SignIn:event:signIn', () => {
		ReactTestUtils.Simulate.click(signInFormNode.querySelector('Button'));
		expect(signIn).toBeCalled();
	});

	it('SignIn:event:username', () => {
		const targetValue = 'rose';
		expect(signInFormNode.querySelectorAll('input')[0].value).toBe(user.name);
		ReactTestUtils.Simulate.change(signInFormNode.querySelectorAll('input')[0], {target: {value: targetValue}});
		expect(signInFormNode.querySelectorAll('input')[0].value).toBe(targetValue);
	});

	it('SignIn:event:userpwd', () => {
		const initValue = '';
		const targetValue = 'secret';
		expect(signInFormNode.querySelectorAll('input')[1].value).toBe(initValue);
		ReactTestUtils.Simulate.change(signInFormNode.querySelectorAll('input')[1], {target: {value: targetValue}});
		expect(signInFormNode.querySelectorAll('input')[1].value).toBe(targetValue);
	});

})
