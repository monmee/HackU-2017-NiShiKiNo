import { Meteor } from 'meteor/meteor';
import './edit_profile.html';

Template.editProfile.events({
  '.submit .updateProfile': function (e) {
      e.preventDefault();
      Passsengers.insert({
        user_id: Meteor.userId(),
        username: Meteor.user().username,
        password: document.getElementsByName('new-pass'),
        profile_image: document.getElementsByName('media[]'),
        profile_comment: document.getElementsByName('comment')
      });
    }
});