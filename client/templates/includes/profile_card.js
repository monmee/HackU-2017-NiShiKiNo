Template.profileCard.helpers({
  name: Meteor.user(),
  age: 24,
  address: "Tokyo, Japan",
  comment: "Hi! I am Kiri man.",
  id: Meteor.userId()
});
