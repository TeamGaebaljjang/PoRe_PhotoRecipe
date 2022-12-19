import HeaderBSM from '../../components/header/HeaderBSM';
import { Wrap, MapCont, MapWrap } from './mapStyle';
import MapModal from './MapModal';
import NavBar from '../../components/navBar/NavBar';
import KakaoMap from './KakaoMap';

const Map = () => {
  return (
    <Wrap>
      <HeaderBSM />
      <MapCont>
        <KakaoMap />
        <MapWrap>
          <MapModal />
          <MapModal />
          <MapModal />
        </MapWrap>
      </MapCont>
      <NavBar />
    </Wrap>
  );
};

export default Map;
