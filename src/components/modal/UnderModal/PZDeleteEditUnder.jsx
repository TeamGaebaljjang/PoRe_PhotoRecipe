import { useNavigate } from 'react-router-dom';
import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const DeleteEditUnder = ({ props }) => {
  const navigate = useNavigate();
  return (
    <UnderModalWrap style={{ marginLeft: '-26px' }}>
      <UnderModalCloseBtn />
      <UnderModalCont>
        <button type="button">삭제</button>
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
  );
};

export default DeleteEditUnder;
