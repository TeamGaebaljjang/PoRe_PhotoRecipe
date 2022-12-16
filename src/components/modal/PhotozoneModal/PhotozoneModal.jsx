import Container from './photoZoneModalStyle';
import PhotoZone from '../../card/PhotoZone';

import Test from '../../../assets/img/main-thumbnail.jpeg';

const PhotoZoneModal = () => {
  return (
    <Container>
      <div className="region">
        <p>my broken mental,,,</p>
      </div>

      <div className="scroll">
        <PhotoZone src={Test} />
        <PhotoZone />
        <PhotoZone />
        <PhotoZone />
      </div>
    </Container>
  );
};

export default PhotoZoneModal;
