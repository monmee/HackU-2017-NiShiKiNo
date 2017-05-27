Template.providerThreadList.helpers({
  threads: function(){
    return Threads.find();
  }
});

Template.providerThreadList.events({
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
