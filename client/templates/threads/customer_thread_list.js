var threadData=[
  {
    title:'カレーのアレ',
    date:'2017/05/23',
    status: 'processing'
  },
  {
    title:'シンセのACアダプター',
    date: '2017/05/26',
    status:'done'
  }
  ];

Template.customerThreadList.helpers({
  threads: function(){
    return threadData;
  }
})  ;
