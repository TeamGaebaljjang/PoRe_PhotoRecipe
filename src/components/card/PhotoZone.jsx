import { useState } from 'react';
import PZDeleteEditUnder from '../modal/UnderModal/PZDeleteEditUnder';
import { Div, Cont, Date, Desc, MoreBtn } from './photoZoneStyle';

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
      {modal ? <PZDeleteEditUnder productId={props.id} /> : null}
    </Div>
  );
};

export default PhotoZone;
