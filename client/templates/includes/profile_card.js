Template.profileCard.helpers({
    email: Meteor.user().emails.[0].address
});
