import { useState } from 'react';
import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';
import LogoutModal from '../ConfirmModal/LogoutModal';

const ProfileUnderModal = ({ modalHandler }) => {
  const [logout, setLogout] = useState(false);
  const logoutHandler = () => {
    setLogout(!logout);
  };

  return (
    <>
      {logout ? <LogoutModal logoutHandler={logoutHandler} /> : null}

      <UnderModalWrap>
        <UnderModalCloseBtn onClick={modalHandler} />
        <UnderModalCont>
          <button type="button">설정 및 개인정보</button>
        </UnderModalCont>
        <UnderModalCont>
          <button
            type="button"
            onClick={() => {
              setLogout(!logout);
            }}
          >
            로그아웃
          </button>
        </UnderModalCont>
      </UnderModalWrap>
    </>
  );
};

export default ProfileUnderModal;
