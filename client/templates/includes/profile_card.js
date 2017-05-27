import { Meteor } from 'meteor/meteor';

Template.profileCard.helpers({
  age: 24,
  address: "Tokyo, Japan",
  comment: "Hi! I am Kiri man.",
  id: Meteor.userId()
});
