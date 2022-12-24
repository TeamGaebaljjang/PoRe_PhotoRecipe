import { useState } from 'react';
import { Div, Cont, Date, Desc, MoreBtn } from './photoZoneStyle';

const PhotoZone = ({ props }) => {
  const [desc, setDesc] = useState(false);

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
      <MoreBtn />
    </Div>
  );
};

export default PhotoZone;
