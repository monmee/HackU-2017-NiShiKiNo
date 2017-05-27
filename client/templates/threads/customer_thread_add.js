
Template.customerThreadAdd.onRendered(function(){
  GoogleMaps.load({key:'AIzaSyCKn0Ze4qeM5C-pJrksWpJOPe9XWTmurdc'});
})

Template.customerThreadAdd.helpers({
  location: function() {
    var location = Geolocation.currentLocation();
    // console.log(location)
    // GoogleMaps.maps.exampleMap.instance

    return{
      lat: location.coords.latitude,
      lng: location.coords.longitude
    }
  },
  // locationLat:function(){
  //   return String(GoogleMaps.maps.exampleMap.instance.getCenter().lat());
  // },
  // locationLat:function(){
  //   return GoogleMaps.maps.exampleMap.instance.getCenter().lng();
  // },

  exampleMapOptions: function() {
    var position = Geolocation.latLng()
    // とりあえず電通大の位置いれとく
    var lat = 35.6576157
    var lng = 139.5439219

    if(position){
      // 位置情報とれたらそっち使う
      lat = position.lat
      lng = position.lng
    }

    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(lat, lng),
        zoom: 12
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
      map: map.instance,
      draggable: true
    });
    // console.log(map);
    var circleOptions = {
      center: new google.maps.LatLng(Number(map.options.center)),  // 中心点(google.maps.LatLng)
      fillColor: '#0000ff',   // 塗りつぶし色
      fillOpacity: 0.2,       // 塗りつぶし透過度（0: 透明 ⇔ 1:不透明）
      map: map.instance,               // 表示させる地図（google.maps.Map）
      radius: 500,           // 半径（ｍ）
      strokeColor: '#0000ff', // 外周色
      strokeOpacity: 0.8,       // 外周透過度（0: 透明 ⇔ 1:不透明）
      strokeWeight: 1         // 外周太さ（ピクセル）
    };
    circleObj = new google.maps.Circle(circleOptions);
    circleObj.bindTo("center", marker, "position");
    $(':text[name="lat"]').val(String(map.options.center.lat()));
    $(':text[name="lng"]').val(String(map.options.center.lng()));
    marker.addListener('dragend',function(){      // マーカーのリスナー
      var pos=marker.getPosition();
      // Session.set('location.lat',pos.lat());
      // Session.set('location.lng',pos.lng());
      $(':text[name="lat"]').val(String(pos.lat()));
      $(':text[name="lng"]').val(String(pos.lng()));
    })
  });
});

Template.customerThreadAdd.events({
  'submit form':function(e){
    e.preventDefault();//formのsubmit処理無効化

    var pos ={
      lat:Number($(e.target).find('[name=lat]').val()),
      lng:Number($(e.target).find('[name=lng]').val())
  }
  console.log(pos);
    var addThread={
      threadID: 'test',
      customerID: Meteor.userId(),
      threadDate: new Date(),
      threadTitle: $(e.target).find('[name=title]').val(),
      threadCategories:$(e.target).find('[name=categories]').val(),
      threadComment:$(e.target).find('[name=detail]').val(),
      location:pos,
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
    circleObj.setRadius(Number(sliderValue)*1000.0);
    // console.log(circleObj);
    console.log(GoogleMaps.maps.exampleMap.instance.getCenter().lat());
  },

});

// マップのオブジェクトを直接触るにはGoogleMaps.maps.exampleMap.instanceを参照
//api key: AIzaSyCKn0Ze4qeM5C-pJrksWpJOPe9XWTmurdc
