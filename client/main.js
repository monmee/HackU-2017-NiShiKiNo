import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { check } from 'meteor/check';

// Meteor.subscribe('threads');
Meteor.subscribe('posts');
Meteor.subscribe('records');
