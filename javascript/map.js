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
var utmk = naver.maps.TransCoord.fromLatLngToUTMK(latlng); // 위/경도 -> UTMK
var tm128 = naver.maps.TransCoord.fromUTMKToTM128(utmk);   // UTMK -> TM128
var naverCoord = naver.maps.TransCoord.fromTM128ToNaver(tm128); // TM128 -> NAVER

infoWindow = new naver.maps.InfoWindow({
  content: ''
});

map.addListener('click', function(e) {
  var latlng = e.coord,
      utmk = naver.maps.TransCoord.fromLatLngToUTMK(latlng),
      tm128 = naver.maps.TransCoord.fromUTMKToTM128(utmk),
      naverCoord = naver.maps.TransCoord.fromTM128ToNaver(tm128);

  utmk.x = parseFloat(utmk.x.toFixed(1));
  utmk.y = parseFloat(utmk.y.toFixed(1));

  console.log('LatLng: ' + latlng.toString());
  console.log('UTMK: ' + utmk.toString());
  console.log('TM128: ' + tm128.toString());
  console.log('NAVER: ' + naverCoord.toString());
});
}

naver.maps.onJSContentLoaded = initGeocoder;
naver.maps.Event.once(map, 'init_stylemap', initGeocoder);