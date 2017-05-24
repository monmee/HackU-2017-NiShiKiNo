Meteor.publish('posts', function() {
  return Posts.find();
});
Meteor.publish('threads',function(){
  return Threads.find();
})
