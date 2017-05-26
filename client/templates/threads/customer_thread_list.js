// threadData=[
//   {
//     threadID: '1',
//     customerID: {},
//     threadDate: '2017/05/26',
//     threadTitle:'カレーのアレ',
//     threadCategories:{},
//     threadComment:{},
//     location:{},
//     isClosed: false,
//     threadStatus: 'processing',
//     searchRange:{}
//   },
//   {
//     threadID: '2',
//     customerID: {},
//     threadDate: '2017/05/24',
//     threadTitle:'シンセのACアダプター',
//     threadCategories:{},
//     threadComment:{},
//     location:{},
//     isClosed: true,
//     threadStatus:'done',
//     searchRange:{}
//   }
//   ];

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
