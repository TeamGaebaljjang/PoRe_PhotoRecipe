import styled from 'styled-components';
import map from '../../assets/img/map.png';

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MapCont = styled.div`
  position: relative;
  background: url(${map}) no-repeat;
  height: calc(100vh - 108px);
  background-size: cover;
  overflow: auto;
`;

export const MapWrap = styled.article`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 24px;
  padding-right: 24px;
`;

export const MapCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  border-radius: 15px;
  margin-left: 24px;
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
