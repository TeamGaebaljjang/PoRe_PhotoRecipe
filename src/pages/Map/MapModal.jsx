import mapPhoto from '../../assets/img/map-photo.jpeg';
import { MapCard, SpotName, SpotImg, SpotTxt } from './mapStyle';

const MapModal = () => {
  return (
    <MapCard>
      <SpotName>연남동</SpotName>
      <SpotImg src={mapPhoto} alt="" />
      <SpotTxt>연남동에 위치한 핫플 카페 청수당공명 포토존</SpotTxt>
    </MapCard>
  );
};

export default MapModal;
