var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.3595316, 127.1052133),
  zoom: 15,
});

map.setCursor('pointer');

function searchAddressToCoordinate(address) {
  naver.maps.Service.geocode({
      query: address
  }, function() {
    console.log("실행");
    item = response.v2.addresses[0],
    point = new naver.maps.Point(item.x, item.y);

    map.setCenter(point);
  });
}

function initGeocoder() {
  if (!map.isStyleMapReady) {
      return;
  }

  searchAddressToCoordinate('가좌길 71');
}

naver.maps.onJSContentLoaded = initGeocoder;
naver.maps.Event.once(map, 'init_stylemap', initGeocoder);