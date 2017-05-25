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
Router.route('/edit', {name:'showProfile'});

Router.route('/cthread',{name:'customerThreadList'});
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.route('/cthread/cdetail',{name:'customerThreadDetail'});
Router.route('/cthreadadd',{name:'customerThreadAdd'});
