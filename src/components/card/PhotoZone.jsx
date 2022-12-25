import { useState } from 'react';
import PZDeleteEditUnder from '../modal/UnderModal/PZDeleteEditUnder';
import { Div, Cont, Date, Desc, MoreBtn } from './photoZoneStyle';
import { BackDrop } from '../../pages/Profile/profileStyle';

const PhotoZone = ({ props }) => {
  const [desc, setDesc] = useState(false);
  const [modal, setModal] = useState(false);

  const testHandle = () => {
    setDesc(!desc);
  };
  return (
    <Div src={props.itemImage}>
      <MoreBtn />
      <Cont
        onClick={() => {
          testHandle();
        }}
        style={desc ? { opacity: '70%' } : { opacity: '0' }}
      >
        <Desc>{props.link}</Desc>
      </Cont>
      <Date>{props.price}</Date>
      <MoreBtn
        onClick={() => {
          setModal(!modal);
        }}
      />
      {modal ? (
        <BackDrop
          style={{
            backgroundColor: 'transparent',
            position: 'fixed',
            left: 'calc(50vw - 195px)',
          }}
          onClick={() => {
            setModal(!modal);
          }}
        />
      ) : null}
      {modal ? <PZDeleteEditUnder props={props} /> : null}
    </Div>
  );
};

export default PhotoZone;
