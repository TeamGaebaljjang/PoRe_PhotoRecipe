import MapModal from './MapModal';
import { MapWrap } from './mapStyle';

const MapWrapper = ({ modals }) => {
  console.log(modals);
  return (
    <MapWrap>
      {modals.map((v) => (
        <MapModal key={v.id} modals={v} />
      ))}
    </MapWrap>
  );
};

export default MapWrapper;
