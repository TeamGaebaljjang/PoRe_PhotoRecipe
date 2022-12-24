import { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const { kakao } = window;

const KakaoMap = ({ result, modals, keyword }) => {
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    // 지도 위치 변경시 panto를 이용(부드럽게 이동)
    isPanto: true,
  });
  const [address, setAddress] = useState([]);

  // 입력한 키워드의 위치로 이동
  const photoZoneSearch = () => {
    const ps = new kakao.maps.services.Places();
    const photoZoneSearchCB = (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setState({ center: { lat: newSearch.y, lng: newSearch.x } });
      }
    };
    ps.keywordSearch(`${result}`, photoZoneSearchCB);
  }
  useEffect(() => {photoZoneSearch}, [result]);


  // 주소 좌표 변환
  const toLocation = (address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(`${address}`, function(result, status) {
         if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            setAddress(coords);
  }})}

  return (
    <Map
      center={state.center}
      style={{
        width: '390px',
        height: '100%',
        zIndex: '0',
      }}
      level={3}
    >
      {modals.map((v) => (
        setAddress(v.itemName.split(',')[0])
        toLocation(address);
        setKeyword(v.itemName.split(',')[1])
        <MapMarker key={`${keyword}-${address}`} position={address} image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
            size: {
              width: 24,
              height: 35
            }}} title={keyword} />
        ))}
    </Map>
  );
});

export default KakaoMap;
