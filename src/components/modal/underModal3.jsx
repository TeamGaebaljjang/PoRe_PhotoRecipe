import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const UnderModal3 = () => {
  return (
    <UnderModalWrap>
      <UnderModalCloseBtn />
      <UnderModalCont>
        <button type="button">신고하기</button>
      </UnderModalCont>
    </UnderModalWrap>
  );
};

export default UnderModal3;
