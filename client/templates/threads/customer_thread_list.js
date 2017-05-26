Template.customerThreadList.helpers({
  threads: function(){
    // return threadData;
    // console.log();
    // if(Threads.find().count()==0){
    //   var cursor=Threads.insert(threadData);
    //   console.log(cursor);
    //   // return threadData;
    // }
    // console.log('thread list'+Threads.find());
    return Threads.find();
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
