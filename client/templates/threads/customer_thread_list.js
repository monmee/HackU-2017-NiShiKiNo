var threadData=[
  {
    threadID: '1',
    title:'カレーのアレ',
    date:'2017/05/23',
    status: 'processing',
    postNum: '5'
  },
  {
    threadID: '2',
    title:'シンセのACアダプター',
    date: '2017/05/26',
    status:'done',
    postNum: '10'
  }
  ];

Template.customerThreadList.helpers({
  threads: function(){
    // return threadData;
    return Threads.find();
  }
});

Template.customerThreadList.events({
  'click .threadLists .thread-line':function(e){
    e.preventDefault();

    var currentID=this._id;
    console.log('clicked '+currentID);
    Router.go('customerThreadDetail', {_id: currentID});
  },
  'click .add-thread':function(){
    Router.go('customerThreadAdd');
  }
})
