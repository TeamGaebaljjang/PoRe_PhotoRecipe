// import mapPhoto from '../../assets/img/map-photo.jpeg';
import { MapCard, SpotName, SpotImg, SpotTxt } from './mapStyle';

const MapModal = ({ modals }) => {
  //   console.log(modals);
  return (
    <MapCard>
      <SpotName>{modals.itemName}</SpotName>
      <SpotImg src={modals.itemImage} alt="포토존에서 찍은 사진" />
      <SpotTxt>{modals.link}</SpotTxt>
      {/* 사진 찍은 날짜 price에다가 받아뒀음 */}
    </MapCard>
  );
};

export default MapModal;
