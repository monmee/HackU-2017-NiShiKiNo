Threads = new Mongo.Collection('threads');
Threads.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});
