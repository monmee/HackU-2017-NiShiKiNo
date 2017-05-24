import { Accounts } from 'meteor/accounts-base';

T9n.setLanguage('ja');

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});
