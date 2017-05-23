Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return Meteor.subscribe('posts'); 
  }
});

Router.route('/',{name:'welcome'});

// Router.route('/cthread', function(){
//   this.render('customerThreadList');
// });
Router.route('/about', {name:'about'});
Router.route('/cthread',{name:'customerThreadList'});
Router.route('/edit', {name:'editProfile'});

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function(){
    return Posts.findOne(this.params._id);
  }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});