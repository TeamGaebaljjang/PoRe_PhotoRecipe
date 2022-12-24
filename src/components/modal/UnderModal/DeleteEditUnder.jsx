import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const DeleteEditUnder = () => {
  return (
    <UnderModalWrap>
      <UnderModalCloseBtn />
      <UnderModalCont>
        <button type="button">삭제</button>
      </UnderModalCont>
      <UnderModalCont>
        <button type="button">수정</button>
      </UnderModalCont>
    </UnderModalWrap>
  );
};

export default DeleteEditUnder;
