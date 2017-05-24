threadData=[
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
  'click .threadLists tr':function(e){
    // console.log('this:'+this._id);
    // console.log('this:'+this.threadID);
    Router.go('customerThreadDetail', {_id: this._id});
  },
  'click .add-thread':function(){
    Router.go('customerThreadAdd');
  }
})
