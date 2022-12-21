import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Photo, Region, List } from './photoZoneListStyle';
import { getPhotoZone } from '../../store/photoZoneSlice';

const PhotoZoneList = () => {
  const dispatch = useDispatch();
  const getPhotoZoneData = useSelector(
    (state) => state.photoZone.photoZoneData,
  );
  useEffect(() => {
    dispatch(getPhotoZone());
  }, []);
  console.log(getPhotoZoneData);
  const photoZoneList = getPhotoZoneData.payload?.product;
  const setPhotoZoneList = [
    ...new Set(photoZoneList && photoZoneList.map((v) => v.itemName)),
  ];
  console.log(setPhotoZoneList);

  return (
    <List>
      {setPhotoZoneList.map((item) => (
        <Container>
          <Photo />
          <Region>{item}</Region>
        </Container>
      ))}
    </List>
  );
};

export default PhotoZoneList;
