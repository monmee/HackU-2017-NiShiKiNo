
Template.customerThreadList.helpers({
  threads: function(){
    return Threads.find( {customerID: Meteor.userId()} );
  }
});

Template.customerThreadList.events({
  'click .threadLists .thread-line':function(e){
    e.preventDefault();

    var currentID=this._id.valueOf();
    // console.log('clicked '+currentID);
    Router.go('customerThreadDetail', {_id: currentID});
  },
  'click .add-thread':function(){
    Router.go('customerThreadAdd');
  }
})
