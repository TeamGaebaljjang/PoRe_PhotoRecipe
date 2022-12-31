import { useState } from 'react';
import PZDeleteEditUnder from '../modal/UnderModal/PZDeleteEditUnder';
import { Div, Cont, Date, Desc, MoreBtn } from './photoZoneStyle';
import { BackDrop } from '../../pages/Profile/profileStyle';

const PhotoZone = ({ props }) => {
  const [desc, setDesc] = useState(false);
  const [modal, setModal] = useState(false);
  const author = localStorage.getItem('accountname');
  const checkUser = props.author.accountname;
  const testHandle = () => {
    setDesc(!desc);
  };
  return (
    <Div src={props.itemImage}>
      <Cont
        onClick={() => {
          testHandle();
        }}
        style={desc ? { opacity: '70%' } : { opacity: '0' }}
      >
        <Desc>{props.link}</Desc>
      </Cont>
      <Date>{props.price}</Date>
      {author === checkUser ? (
        <MoreBtn
          onClick={() => {
            setModal(!modal);
          }}
        />
      ) : null}

      {modal ? (
        <BackDrop
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
