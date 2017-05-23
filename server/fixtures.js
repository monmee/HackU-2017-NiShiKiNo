if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Google',
    url: 'http://google.com/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
