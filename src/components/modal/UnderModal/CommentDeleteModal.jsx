import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {
  CommentModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const DeleteEditUnder = ({
  postDetailId,
  commentList,
  setComment,
  getComments,
}) => {
  const location = useLocation();
  const target = location.pathname;

  const deleteComment = async () => {
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const authToken = localStorage.getItem('token');
      await axios.delete(
        `${URL}/post/${postDetailId?.id}/comments/${commentList.id}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      getComments();
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentModalWrap
      style={{ marginBottom: '0' }}
      className={
        target === '/feed/feeddetail' ? 'detail-modal detail' : 'detail-modal'
      }
    >
      <UnderModalCloseBtn />
      <UnderModalCont
        onClick={() => {
          deleteComment();
        }}
      >
        <button type="button">삭제</button>
      </UnderModalCont>
    </CommentModalWrap>
  );
};

export default DeleteEditUnder;
