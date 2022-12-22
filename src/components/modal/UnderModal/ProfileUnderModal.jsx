import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const ProfileUnderModal = ({ modalHandler }) => {
  return (
    <UnderModalWrap>
      <UnderModalCloseBtn onClick={modalHandler} />
      <UnderModalCont>
        <button type="button">설정 및 개인정보</button>
      </UnderModalCont>
      <UnderModalCont>
        <button type="button">로그아웃</button>
      </UnderModalCont>
    </UnderModalWrap>
  );
};

export default ProfileUnderModal;
