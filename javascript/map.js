var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.5666103, 126.9783882),
  zoom: 16
}),
infoWindow = null;

function initGeocoder() {
if (!map.isStyleMapReady) {
  return;
}

var latlng = map.getCenter();

map.addListener('click', function(e) {
  var latlng = e.coord,

  console.log('LatLng: ' + latlng.toString());
});
}

naver.maps.onJSContentLoaded = initGeocoder;
naver.maps.Event.once(map, 'init_stylemap', initGeocoder);