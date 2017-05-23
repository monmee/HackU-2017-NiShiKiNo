Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});


Router.route('/',{name:'welcome'});
// Router.route('/cthread', function(){
//   this.render('customerThreadList');
// });
Router.route('/about',{name:'about'});
Router.route('/cthread',{name:'customerThreadList'});
