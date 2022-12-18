import HeaderBSM from '../../components/header/HeaderBSM';
import { Wrap, MapCont, MapWrap } from './mapStyle';
import MapModal from './MapModal';
import NavBar from '../../components/navBar/NavBar';

const Map = () => {
  return (
    <Wrap>
      <HeaderBSM />
      <MapCont>
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
