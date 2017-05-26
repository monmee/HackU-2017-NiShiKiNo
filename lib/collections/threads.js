import { check } from 'meteor/check';

Threads = new Mongo.Collection('threads');

Threads.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  remove: function(userId, doc) {
    return doc && doc.userId === userId;
  },
});




Meteor.methods({
  threadInsert: function(threadAttributes) {
    check(Meteor.userId(), String);
    check(threadAttributes, {
      threadID: String,
      customerID:String,
      threadDate: Date,
      threadTitle: String,
      threadCategories:String,
      threadComment: String,
      location:String,
      isClosed:Boolean,
      threadStatus:String,
      searchRange:Number
    });
    // var threadWithSameLink = threads.findOne({url: threadAttributes.url});
    // if (threadWithSameLink) {
    //   console.log("exist threadWithSameLink");
    //   return {
    //     threadExists: true,
    //     _id: threadWithSameLink._id
    //   }
    // }
    var user = Meteor.user();
    var thread = _.extend(threadAttributes, {
      userId: user._id,
      // author: user.username,
      submitted: new Date()
    });
    var threadId = Threads.insert(thread);
    return {
      _id: threadId
    };

  }
});

// Threads.allow({
//   insert: function(userId, doc) {
//     // only allow threading if you are logged in
//     return !! userId;
//   }
// });
