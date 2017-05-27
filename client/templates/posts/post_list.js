Template.postsList.helpers({
  posts: function() {
    console.log(Posts.find());
    return Posts.find({threadID: ''});
  }
});
