import { useEffect, useState } from 'react';

const { kakao } = window;

const KakaoMap = ({ input, modals }) => {
  // what i made
  //  - geolocation API 이용해 사용자의 현재 위치를 지도 초기 위도, 경도로 설정
  const [map, setMap] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       setLat(pos.coords.latitude);
  //       setLon(pos.coords.longitude);
  //     });
  //   } else {
  //     setLat(37.5666805);
  //     setLon(126.9784147);
  //   }

  // 포토존 마커 생성
  useEffect(() => {
    const container = document.getElementById('map');
    setLat(37.5666805);
    setLon(126.9784147);
    const options = { center: new kakao.maps.LatLng(lat, lon), level: 3 };
    const kakaomap = new kakao.maps.Map(container, options);
    setMap(kakaomap);

    // 마커 이미지
    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';
    const imageSize = new kakao.maps.Size(64, 69);
    const imageOption = { offset: new kakao.maps.Point(27, 69) };
    // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    // 인포윈도우를 표시하는 클로저를 만드는 함수 (* map -> Map)
    const makeOverListener = (Map, marker, infowindow) => {
      return () => {
        infowindow.open(Map, marker);
      };
    };

    // 인포윈도우를 닫는 클로저를 만드는 함수
    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };

    for (let i = 0; i < modals.length; i += 1) {
      const Lat = modals[i].split('/')[0].split(',')[0];
      const Lng = modals[i].split('/')[0].split(',')[1];
      const latlng = new kakao.maps.LatLng(Lat, Lng);
      const content = `<div>${modals[i].split('/')[1]}</div>`;
      //   ^ css 어떻게 적용할지?
      const marker = new kakao.maps.Marker({
        map,
        position: latlng,
        image: markerImage,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content,
      });

      kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow),
      );
      kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow),
      );
    }
  }, []);

  // 키워드 검색
  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(`${input}`, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(data[0].y, data[0].x);
        map.setCenter(coords);
      }
    });
  }, [input]);

  return (
    <div id="map" style={{ width: '390px', height: '100%', zIndex: '0' }}>
      지도 생성, 주소와 키워드 분리, 주소 기반 마커 생성, 키워드 검색, 에 따른
      포토존 모달 생성
    </div>
  );
};

export default KakaoMap;
