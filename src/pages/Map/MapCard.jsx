import styled from 'styled-components';
import mapPhoto from '../../assets/img/map-photo.jpeg';

export const MapModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  border-radius: 15px;
  margin: 0 0 0 24px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const SpotName = styled.p`
  margin: 10px 20px;
`;

export const SpotImg = styled.img`
  width: 300px;
  height: 150px;
  object-fit: cover;
`;

export const SpotTxt = styled.p`
  font-size: 14px;
  margin: 20px;
  text-align: center;
`;

const MapCard = () => {
  return (
    <MapModal>
      <SpotName>연남동</SpotName>
      <SpotImg src={mapPhoto} alt="" />
      <SpotTxt>연남동에 위치한 핫플 카페 청수당공명 포토존</SpotTxt>
    </MapModal>
  );
};

export default MapCard;
