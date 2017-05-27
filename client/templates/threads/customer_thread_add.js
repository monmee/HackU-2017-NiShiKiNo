latitude=35.6750756712;
longitude=139.769065316;

Template.customerThreadAdd.onRendered(function(){
})

Template.customerThreadAdd.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 15
      };
    }
  },
  searchRange:function(){
    return Session.get('searchRange');
  }
});

Template.customerThreadAdd.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.load({key:'AIzaSyCKn0Ze4qeM5C-pJrksWpJOPe9XWTmurdc'});

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
  }else{
    alert('現在地を自動取得できません．\n手動で現在地を設定してください．');
  }

  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });


  function successCallback(position) {
    //成功したときの処理
    console.log('success getPosition');
    console.log('緯度'+position.coords.latitude+'，経度'+ position.coords.longitude);
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;
  }
  function errorCallback(error) {
    //失敗のときの処理
    console.log('error getPosition');
  }


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
