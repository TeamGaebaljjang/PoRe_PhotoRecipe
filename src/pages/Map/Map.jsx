import styled from 'styled-components';
import HeaderBSM from '../../components/header/HeaderBSM';
import map from '../../assets/img/map.png';
import MapCard from './MapCard';
import NavBar from '../../components/navBar/NavBar';

export const Wrap = styled.div`
  height: 100vh;
  overflow: auto;
`;

export const MapCont = styled.div`
  position: relative;
  background: url(${map}) no-repeat;
  height: 100vh;
  background-size: cover;
  overflow: auto;
`;

export const MapWrap = styled.article`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 130px;
`;

const Map = () => {
  return (
    <Wrap>
      <HeaderBSM />

      <MapCont>
        <MapWrap>
          <MapCard />
          <MapCard />
          <MapCard />
        </MapWrap>
      </MapCont>

      <NavBar />
    </Wrap>
  );
};

export default Map;
