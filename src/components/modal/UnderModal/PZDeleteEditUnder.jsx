import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PZDeleteModal from '../ConfirmModal/PZDeleteModal';
import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const DeleteEditUnder = ({ props }) => {
  const navigate = useNavigate();
  const [del, setDel] = useState(false);
  const deleteHandler = () => {
    setDel(!del);
  };

  return (
    <>
      {del ? (
        <PZDeleteModal deleteHandler={deleteHandler} props={props} />
      ) : null}

      <UnderModalWrap className="pz-under-modal">
        <UnderModalCloseBtn />
        <UnderModalCont>
          <button
            type="button"
            onClick={() => {
              setDel(!del);
            }}
          >
            삭제
          </button>
        </UnderModalCont>
        <UnderModalCont>
          <button
            type="button"
            onClick={() => {
              navigate('/profile/editphotozone', {
                state: { props: { props } },
              });
            }}
          >
            수정
          </button>
        </UnderModalCont>
      </UnderModalWrap>
    </>
  );
};

export default DeleteEditUnder;
