import { Meteor } from 'meteor/meteor';
import './edit_profile.html';

Template.editProfile.helpers({
  username: function()
  {
    return Meteor.user().username;
  }
});

Template.editProfile.events({
  '.submit .update-profile': function (e) {
      e.preventDefault();
      Posts.insert({
        message: 'hello!'
        // username: Meteor.user().username,
        // password: document.getElementsByName('new-pass'),
        // profile_image: document.getElementsByName('media[]'),
        // profile_comment: document.getElementsByName('comment')
      });
      Router.route('/cthread',{name:'customerThreadList'});
    }
});
