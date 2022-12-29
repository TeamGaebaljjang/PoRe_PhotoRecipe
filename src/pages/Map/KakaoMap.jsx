import { useEffect, useState } from 'react';
import iconMarker from '../../assets/icons/icon-marker.svg';

const { kakao } = window;

const KakaoMap = ({ text }) => {
  // 초기 지도 생성
  const [kmap, setKmap] = useState(null);
  useEffect(() => {
    const container = document.getElementById('map');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const latlng = new kakao.maps.LatLng(lat, lon);
        const options = {
          center: latlng,
          level: 7,
        };
        const map = new kakao.maps.Map(container, options);
        console.log(map);
        setKmap(map);
      });
    } else {
      const latlng = new kakao.maps.LatLng(37.5666805, 126.9784147);
      const options = {
        center: latlng,
        level: 7,
      };
      const map = new kakao.maps.Map(container, options);
      console.log(`!${map}`);
      setKmap(map);
    }
  }, []);

  useEffect(() => {
    try {
      if (kmap) {
        // 키워드 검색
        const ps = new kakao.maps.services.Places();
        console.log(text);
        const placeSearchCB = (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(data[0].y, data[0].x);
            kmap.setCenter(coords);
          }
        };
        ps.keywordSearch(`${text}`, placeSearchCB);

        // 포토존 위치와 title 객체 배열
        const positions = [
          {
            title: '☕강화도 아울스 커피',
            latlng: new kakao.maps.LatLng(37.448819, 126.39002),
          },
          {
            title: '☕신사 새들러하우스',
            latlng: new kakao.maps.LatLng(37.519537, 127.024897),
          },
          {
            title: '⛰종로 인왕산',
            latlng: new kakao.maps.LatLng(37.584956, 126.957836),
          },
          {
            title: '☕고양 크림앤커피앤디저트',
            latlng: new kakao.maps.LatLng(37.616858, 126.832726),
          },
          {
            title: '☕고양 프로메나드',
            latlng: new kakao.maps.LatLng(37.6010926, 126.816946),
          },
          {
            title: '☕군산 카페라파르',
            latlng: new kakao.maps.LatLng(35.8128296, 126.396951),
          },
          {
            title: '☕군산 틈',
            latlng: new kakao.maps.LatLng(35.9892728, 126.711485),
          },
          {
            title: '☕인천 일광전구 라이트하우스',
            latlng: new kakao.maps.LatLng(37.471962, 126.635135),
          },
          {
            title: '☕인천 온음커피',
            latlng: new kakao.maps.LatLng(37.4144097, 126.67329),
          },
          {
            title: '☕인천 원인재 벚꽃로',
            latlng: new kakao.maps.LatLng(37.4132289, 126.686365),
          },
          {
            title: '☕인천 송도 센트럴파크',
            latlng: new kakao.maps.LatLng(37.3924167, 126.639565),
          },
          {
            title: '☕인천 현대프리미엄아울렛 송도점',
            latlng: new kakao.maps.LatLng(37.3823549, 126.658537),
          },
          {
            title: '☕종로 북악스카이웨이',
            latlng: new kakao.maps.LatLng(37.6011259, 126.976345),
          },
          {
            title: '🏊🏻제주 용머리해안',
            latlng: new kakao.maps.LatLng(33.2337174, 126.314703),
          },
          {
            title: '🐄제주 성이시돌목장',
            latlng: new kakao.maps.LatLng(33.2337174, 126.314703),
          },
        ];

        // 마커
        const imageSize = new kakao.maps.Size(24, 35);
        const markerImage = new kakao.maps.MarkerImage(iconMarker, imageSize);

        positions.forEach((el) => {
          return new kakao.maps.Marker({
            map: kmap,
            position: el.latlng,
            title: el.title,
            image: markerImage,
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [text]);

  return (
    <div id="map" style={{ width: '390px', height: '100%', zIndex: '0' }} />
  );
};

export default KakaoMap;
