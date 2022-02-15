var mapOptions = {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);

naver.maps.Service.geocode({
  address: '불정로 6'
}, function(status, response) {
  if (status !== naver.maps.Service.Status.OK) {
      return alert('Something wrong!');
  }

  var result = response.result, // 검색 결과의 컨테이너
      items = result.items; // 검색 결과의 배열

  console.log(items);
});