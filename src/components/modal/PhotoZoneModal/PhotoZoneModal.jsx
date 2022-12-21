import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Container from './photoZoneModalStyle';
import PhotoZone from '../../card/PhotoZone';
// import Test from '../../../assets/img/main-thumbnail.jpeg';
import { getPhotoZone } from '../../../store/photoZoneSlice';

const PhotoZoneModal = ({ name }) => {
  const dispatch = useDispatch();
  const getPhotoZoneData = useSelector(
    (state) => state.photoZone.photoZoneData,
  );
  useEffect(() => {
    dispatch(getPhotoZone());
  }, []);
  const photoZoneList = getPhotoZoneData.payload?.product;

  return (
    <Container>
      <div className="region">
        <p>{name}</p>
      </div>
      <div className="scroll">
        {photoZoneList
          .filter((v) => v.itemName === name)
          .map((v) => (
            <PhotoZone props={v} />
          ))}
      </div>
    </Container>
  );
};

export default PhotoZoneModal;
