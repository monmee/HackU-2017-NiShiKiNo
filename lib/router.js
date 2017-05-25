Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/',{name:'welcome'});

// Router.route('/cthread', function(){
//   this.render('customerThreadList');
// });
Router.route('/about', {name:'about'});
Router.route('/edit', {name:'editProfile'});

Router.route('/cthread',{name:'customerThreadList'});
Router.route('/cthread/:_id',
{
  name:'customerThreadDetail',
  data: function(){
    var currentID=this.params._id;
    console.log(currentID);
    console.log(Threads.findOne({_id: currentID}));
    return Threads.findOne({_id: currentID});
  }
});
Router.route('/cthreadadd',{name:'customerThreadAdd'});
Router.route('/cthread/edit/:_id',
{
  name:'customerThreadEdit',
  data: function(){
    console.log(this.params);
    console.log(Threads.findOne({_id: this.params._id}));
    return Threads.findOne({_id: this.params._id});
  }
});

Router.route('/pthread', {name: 'providerThreadList'});
