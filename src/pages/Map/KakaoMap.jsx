import { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const { kakao } = window;

const KakaoMap = () => {
  // const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch('이태원 맛집', (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        const bounds = new kakao.maps.LatLngBounds();
        const Markers = [];

        for (let i = 0; i < data.length; i += 1) {
          // @ts-ignore
          Markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(Markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: '390px',
        height: 'calc(100vh - 108px)',
        zIndex: '0',
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          //   onClick={() => setInfo(marker)}
        />
        //   {info && info.content === marker.content && (
        //     <div style={{ color: '#000' }}>{marker.content}</div>
        //   )}
        // </MapMarker>
      ))}
    </Map>
  );
};

export default KakaoMap;
