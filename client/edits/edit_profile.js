Template.editProfile.events({
  '.submit .updateProfile': function (e) {
      e.preventDefault();
      Passsengers.insert({
        username: document.getElementsByName('user-name'),
        password: document.getElementsByName('new-pass'),
        profile_image: document.getElementsByName('media[]'),
        profile_comment: document.getElementsByName('comment')
      });
    }
});