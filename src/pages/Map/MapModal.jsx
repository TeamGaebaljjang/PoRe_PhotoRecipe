import { MapCard, SpotName, SpotImg, SpotTxt } from './mapStyle';

const MapModal = ({ v }) => {
  return (
    <MapCard>
      <SpotName>{v.itemName}</SpotName>
      <SpotImg src={v.itemImage} alt="포토존에서 찍은 사진" />
      <SpotTxt>{v.link}</SpotTxt>
    </MapCard>
  );
};

export default MapModal;
