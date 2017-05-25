import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Meteor.subscribe('threads');
Meteor.subscribe('passengers');

T9n.setLanguage('<lang>');
