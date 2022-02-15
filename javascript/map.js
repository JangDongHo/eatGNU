var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.3595316, 127.1052133),
  zoom: 15,
});

map.setCursor('pointer');

function initGeocoder() {
  if (!map.isStyleMapReady) {
      return;
  }

  searchAddressToCoordinate('가좌길 71');
}

naver.maps.onJSContentLoaded = initGeocoder;
naver.maps.Event.once(map, 'init_stylemap', initGeocoder);