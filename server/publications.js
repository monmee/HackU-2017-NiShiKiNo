// import { Threads } from '../lib/collections/collections.js'

Meteor.publish('threads',function(){
  // console.log('Threads publish'+Threads.find());
  return Threads.find();
});
Meteor.publish('posts',function(){
  // console.log('Threads publish'+Threads.find());
  return Posts.find();
});

Meteor.publish('passengers', function(){
  return Passengers.find();
});
