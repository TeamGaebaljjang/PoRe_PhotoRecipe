import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  
  return (
    <>
      {logout ? <LogoutModal logoutHandler={logoutHandler} /> : null}

      <UnderModalWrap>
        <UnderModalCloseBtn onClick={modalHandler} />
        <UnderModalCont>
          <button
            type="button"
            onClick={() => {
              navigate(`/profile/editprofile`);
            }}
          >
            설정 및 개인정보
          </button>
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
