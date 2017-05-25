import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Records = new Mongo.Collection('records');

RecordSchema = new SimpleSchema({
  username: {
    type: String,
    label: '名前'
  },
  address: {
    type: String,
    label: '住所'
  },
  
  comment: {
    type: String,
    label: 'ひとこと'
  },
});

Meteor.methods({
  updateProfile: function(doc) {
    // console.log(this.userId);
    // console.log(doc);
    // console.log(RecordSchema);
    // check(doc, RecordSchema);
    Records.insert(doc);
  }
});
