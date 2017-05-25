// import { Threads } from '../lib/collections/collections.js'

Meteor.publish('threads',function(){
  return Threads.find();
})

