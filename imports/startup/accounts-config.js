import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    forbidClientAccountCreation: false,
    passwordSignupFields: 'USERNAME_ONLY',
});
