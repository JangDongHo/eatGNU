const buttons = document.querySelectorAll(".restaurant-list");
const queryMap = document.querySelector("#map-container");
const mapQuitBtn = document.querySelector("#map-quit");

for (const button of buttons) {
  button.addEventListener("click", function(event) {
    let restaurantPath = event.target.offsetParent;
    if (restaurantPath.classList.value !== "restaurant-list") { 
      restaurantPath = restaurantPath.offsetParent;
    }
    const restaurantName = restaurantPath.childNodes[5].childNodes[1].innerText;
    const restaurantAddress = restaurantPath.attributes[1].value;
    document.body.style.overflow = "hidden";
    queryMap.classList.remove("invisible");
    geocoding(restaurantName, restaurantAddress);
  })
}

function geocoding(name, address) {
    var Addr_val = address;

    // 도로명 주소를 좌표 값으로 변환(API)
    naver.maps.Service.geocode({
        query: Addr_val
    }, function(status, response) {
        if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
        }

        var result = response.v2, // 검색 결과의 컨테이너
            items = result.addresses; // 검색 결과의 배열
            
        // 리턴 받은 좌표 값을 변수에 저장
        let x = parseFloat(items[0].x);
        let y = parseFloat(items[0].y);
        mapGenerator(name, String(y), String(x));
    })
}

function mapGenerator(name, la,lo){
  var location = new naver.maps.LatLng(la,lo),
      map = new naver.maps.Map('map', {
          center: location,
          zoom: 19
      }),
      marker = new naver.maps.Marker({
          map: map,
          position: location
      });
  if (isMobile()) {
    var contentString = [
        '<div>',
        '   <h5>'+name+'</h5>',
        '</div>'
    ].join('');
  }
  else {
    var contentString = [
        '<div>',
        '   <h5>'+name+'</h5><br>',
        '   <a target="_blank" href="http://map.naver.com/search/가좌동'+name+'" >네이버 지도 바로 가기</a>',
        '</div>'
    ].join('');
  }

  var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    //maxWidth: 300,
    backgroundColor: "#eee",
    borderColor: "#A4A4A4",
    //borderRadius:"30px",
    borderWidth: 2,
    disableAnchor:true,
    pixelOffset: new naver.maps.Point(0, -10)
  });
  
  naver.maps.Event.addListener(marker, "click", function() {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
  });

  mapQuitBtn.addEventListener("click", function() {
    if (infowindow.getMap()) {
      infowindow.close();
    }
    queryMap.classList.add("invisible");
    document.body.style.overflow = "visible";
  });
}