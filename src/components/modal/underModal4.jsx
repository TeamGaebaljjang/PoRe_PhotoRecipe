import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const UnderModal4 = () => {
  return (
    <UnderModalWrap>
      <UnderModalCloseBtn />
      <UnderModalCont>
        <button type="button">삭제</button>
      </UnderModalCont>
    </UnderModalWrap>
  );
};

export default UnderModal4;
