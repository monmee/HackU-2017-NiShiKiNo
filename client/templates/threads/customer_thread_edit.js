Template.customerThreadEdit.helpers({

});

Template.customerThreadEdit.events({
  // cannel 処理
  'click #cancelButton':function(e){
    e.preventDefault();//formのsubmit処理無効化
    console.log('cancel');
    Router.go('customerThreadDetail',{_id:this._id});
  },
  'submit form':function(e){
      e.preventDefault();//formのsubmit処理無効化

      Router.go('customerThreadDetail',{_id:this._id});
  }
});
