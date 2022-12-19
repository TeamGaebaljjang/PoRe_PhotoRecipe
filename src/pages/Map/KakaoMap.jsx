import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 37.566826, lng: 126.9786567 }}
      style={{ width: '390px', height: 'calc(100vh - 108px)', zIndex: '0' }}
    >
      <MapMarker position={{ lat: 37.566826, lng: 126.9786567 }} />
    </Map>
  );
};

export default KakaoMap;
