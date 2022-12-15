import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const UnderModal2 = () => {
  return (
    <UnderModalWrap>
      <UnderModalCloseBtn />
      <UnderModalCont>
        <button type="button">설정 및 개인정보</button>
      </UnderModalCont>
      <UnderModalCont>
        <button type="button">로그아웃</button>
      </UnderModalCont>
    </UnderModalWrap>
  );
};

export default UnderModal2;
