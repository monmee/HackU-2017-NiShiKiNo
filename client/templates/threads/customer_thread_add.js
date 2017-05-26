Template.customerThreadAdd.onRendered(function(){
  GoogleMaps.load({key:'AIzaSyCKn0Ze4qeM5C-pJrksWpJOPe9XWTmurdc'});
})

Template.customerThreadAdd.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  },
  searchRange:function(){
    return Session.get('searchRange');
  }
});

Template.customerThreadAdd.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});

Template.customerThreadAdd.events({
  'submit form':function(e){
    e.preventDefault();//formのsubmit処理無効化

    var addThread={
      threadID: 'test',
      customerID: Meteor.userId(),
      threadDate: new Date(),
      threadTitle: $(e.target).find('[name=title]').val(),
      threadCategories:$(e.target).find('[name=categories]').val(),
      threadComment:$(e.target).find('[name=detail]').val(),
      location:$(e.target).find('[name=location]').val(),
      isClosed: false,
      threadStatus: 'processing',
      searchRange:Number($(e.target).find('[name=rangeSlider]').val()),
    }
    Meteor.call('threadInsert',addThread,function(error,result){
      if(error){return alert(error.reason);}

      if(result.postExists){return alert('this thread has already been created.')}

      Router.go('customerThreadDetail',{_id: result._id});
    });
  },
  'input input[type=range]':function(e){
    var sliderValue = e.currentTarget.value;
     Session.set('searchRange', sliderValue);
    var val=$(e.target).find('[name=rangeSlider]').val();
    console.log('value: '+sliderValue);
  }
});

//api key: AIzaSyCKn0Ze4qeM5C-pJrksWpJOPe9XWTmurdc
