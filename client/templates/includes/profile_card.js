Template.profileCard.helpers({
    name: "Kiri Man",
    email: Meteor.user().emails.[0].address,
    age: 24,
    address: "Toky, Japan",
    comment: "Hi! I am Kiri man.",
    id: Meteor.userId()
});
