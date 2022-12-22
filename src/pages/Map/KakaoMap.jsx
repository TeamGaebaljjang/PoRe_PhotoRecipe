import { useState, useEffect } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const { kakao } = window;

// modals props 받아오기
const KakaoMap = ({ result }) => {
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    // 지도 위치 변경시 panto를 이용(부드럽게 이동)
    isPanto: true,
  });

  // 입력한 키워드의 위치로 이동
  useEffect(() => {
    // if (!map) return;
    const ps = new kakao.maps.services.Places();
    const photoZoneSearchCB = (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setState({ center: { lat: newSearch.y, lng: newSearch.x } });
      }
    };
    ps.keywordSearch(`${result}`, photoZoneSearchCB);
  }, [result]);

  return (
    <Map // 지도를 표시할 Container
      center={state.center}
      style={{
        width: '390px',
        height: '100%',
        zIndex: '0',
      }}
      level={3}
    >
      {/* 등록해둔 전체 포토존들 마커 찍어두기 */}
    </Map>
  );
};

export default KakaoMap;
