import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Photo, Region, List } from './photoZoneListStyle';
import { getPhotoZone } from '../../store/photoZoneSlice';
import PhotoZoneModal from '../modal/PhotoZoneModal/PhotoZoneModal';
import { BackDrop } from '../../pages/Profile/profileStyle';

const PhotoZoneList = ({ accountname }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const [name, setName] = useState('');
  const getPhotoZoneData = useSelector(
    (state) => state.photoZone.photoZoneData,
  );
  useEffect(() => {
    dispatch(getPhotoZone(accountname));
  }, []);

  const photoZoneList = getPhotoZoneData.payload?.product;

  const setPhotoZoneList = [
    ...new Set(photoZoneList && photoZoneList.map((v) => v.itemName)),
  ];

  const thumbNail = [];
  setPhotoZoneList.map((v, i) =>
    photoZoneList.map((k) =>
      v === k.itemName && thumbNail.length === i
        ? thumbNail.push(k.itemImage)
        : null,
    ),
  );

  return (
    <List ref={nameRef}>
      {setPhotoZoneList.map((item, i) => (
        <Container
          onClick={() => {
            setModal(!modal);
            setName(nameRef.current.children[i].innerText);
          }}
        >
          <Photo src={thumbNail[i]} />
          <Region>{item}</Region>
        </Container>
      ))}
      {modal ? (
        <BackDrop
          onClick={() => {
            setModal(!modal);
          }}
        />
      ) : null}
      {modal ? <PhotoZoneModal name={name} /> : null}
    </List>
  );
};

export default PhotoZoneList;
