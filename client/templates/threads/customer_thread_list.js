var threadData=[
  {
    title:'カレーのアレ',
    date:'2017/05/23'},
  {
    title:'シンセのACアダプター',
    date: '2017/05/26'}
  ];

Template.customerThreadList.helpers({
  threads: function(){
    return threadData;
  }
})  ;
