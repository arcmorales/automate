'use strict';
var expect = require('chai').expect;


describe('Navigation to demo log in page', function() {
		it('should be able to navigate and open the demo login page', function () {
				browser.url('https://arcmorales.github.io/demo/');
				var islogin = browser.isExisting('.form-signin');
				expect(islogin).to.be.true;
				
		});
});

describe('Positive test to login page', function() {
		it('should be able to log in once valid user credentials are used', function () {
				var username = browser.element('#inputUser');
				var password = browser.element('#inputPassword');
				username.setValue('ara.morales');
				password.setValue('InterGalactic9?');
				browser.click('button[type="submit"]');
				browser.waitForVisible('form.form-success');
				var isNewForm = browser.isExisting('form.form-success');
				expect(isNewForm).to.be.true;
		 });
});

describe('Negative test to login page', function() {
		before(function() {
			browser.url('https://arcmorales.github.io/demo/');
			browser.pause(1500); 
	});
		it('should not be able to log in with empty credentials', function () {
				browser.click('button[type="submit"]');
				browser.waitForVisible('.alert');
				var errMsg = browser.getText('span.errormsg');
				expect(errMsg).to.equal('Invalid username or password');
		});

		it('should not be able to log in with white spaces as credentials', function () {
				var username = browser.element('#inputUser');
				var password = browser.element('#inputPassword');
				username.setValue('    ');
				password.setValue(' ');
				browser.click('button[type="submit"]');
				browser.waitForVisible('.alert');
				var errMsg = browser.getText('span.errormsg');
				expect(errMsg).to.equal('Invalid username or password');
		});

		 it('should not be able to log in with valid username but invalid password', function () {
				var username = browser.element('#inputUser');
				var password = browser.element('#inputPassword');
				username.setValue('A_morales');
				password.setValue('#PazWorD');
				browser.click('button[type="submit"]');
				browser.waitForVisible('.alert');
				var errMsg = browser.getText('span.errormsg');
				expect(errMsg).to.equal('Invalid username or password');
		});

		 it('should not be able to log in with invalid username but valid password', function () {
				var username = browser.element('#inputUser');
				var password = browser.element('#inputPassword');
				username.setValue('AaaAaaaTEST');
				password.setValue('&PazWorD');
				browser.click('button[type="submit"]');
				browser.waitForVisible('.alert');
				var errMsg = browser.getText('span.errormsg');
				expect(errMsg).to.equal('Invalid username or password');
		});

			it('should not be able to log in with non-existent username and non-existent password', function () {
				var username = browser.element('#inputUser');
				var password = browser.element('#inputPassword');
				username.setValue('RAndom');
				password.setValue('$$RanDom');
				browser.click('button[type="submit"]');
				browser.waitForVisible('.alert');
				var errMsg = browser.getText('span.errormsg');
				expect(errMsg).to.equal('Invalid username or password');
		});

			it('should not be able to log in with empty username and an existing password', function () {
				var username = browser.element('#inputUser');
				var password = browser.element('#inputPassword');
				username.setValue('');
				password.setValue('&PazWorD');
				browser.click('button[type="submit"]');
				browser.waitForVisible('.alert');
				var errMsg = browser.getText('span.errormsg');
				expect(errMsg).to.equal('Invalid username or password');
		});

			it('should not be able to log in with valid username and empty password', function () {
				var username = browser.element('#inputUser');
				var password = browser.element('#inputPassword');
				username.setValue('A_morales');
				password.setValue('');
				browser.click('button[type="submit"]');
				browser.waitForVisible('.alert');
				var errMsg = browser.getText('span.errormsg');
				expect(errMsg).to.equal('Invalid username or password');
		});

			it('should not be able to log in with valid username and password of wrong letter casing', function () {
				var username = browser.element('#inputUser');
				var password = browser.element('#inputPassword');
				username.setValue('A_morales');
				password.setValue('&paszworD');
				browser.click('button[type="submit"]');
				browser.waitForVisible('.alert');
				var errMsg = browser.getText('span.errormsg');
				expect(errMsg).to.equal('Invalid username or password');
		});


});
