import angular from 'angular';
import angularMeteor from 'angular-meteor';
import '../imports/startup/accounts-config.js';

angular.module('simple-todos', [
  angularMeteor,
  'accounts.ui'
]);
