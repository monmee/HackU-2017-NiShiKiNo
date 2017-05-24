Template.customerThreadItem.helpers({
  statusIcon: function(status){
    var icon;
    if(status=='done'){
      icon='<ul class="center-align"><li><i class="material-icons green-text text-darken-2 center">done</i></li><li>Done</li></ul>';
    }else if(status=='processing'){
      icon='<ul><li><i class="material-icons yellow-text text-darken-2 center">loop</i></li><li>Processing</li></ul>';
    }else{
      icon='<div class="left-align"><ul class="center-align"><li><i class="material-icons red-text text-darken-2 center">report_problem</i></li><li>Error</li></ul></div>';
    }
    return new Spacebars.SafeString(icon);;
  }
});
