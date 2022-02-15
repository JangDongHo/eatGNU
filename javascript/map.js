function mapGenerator(la,lo,name,link){
  var HOME_PATH = window.HOME_PATH || '.';
  var location = new naver.maps.LatLng(la,lo),
      map = new naver.maps.Map('map', {
          center: location,
          zoom: 30
      }),
      marker = new naver.maps.Marker({
          map: map,
          position: location
      });
  
  var contentString = [
          '<div class="iw_inner ridi">',
          '   <h5>'+name+'</h5>',
          '   <p>네이버 지도 바로 가기<br>',
          '       <a href="'+link+'" target="_blank">'+link+'/</a>',
          '   </p>',
          '</div>'
      ].join('');
  
  var infowindow = new naver.maps.InfoWindow({
      content: contentString,
      maxWidth: 300,
      backgroundColor: "#eee",
      borderColor: "#A4A4A4",
      borderRadius:"30px",
      borderWidth: 2,
      disableAnchor:true,
      anchorColor: "#A4A4A4",
      pixelOffset: new naver.maps.Point(10, -10)
  });
  
  naver.maps.Event.addListener(marker, "click", function(e) {
      if (infowindow.getMap()) {
          infowindow.close();
      } else {
          infowindow.open(map, marker);
      }
  });
  setTimeout(function() {
      window.dispatchEvent(new Event('resize'));
  }, 600);
}