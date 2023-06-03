import { useLocation } from 'react-router-dom';
import {
  CommentModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';
import { api } from '../../../axiosInstance';

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
      await api.delete(`/post/${postDetailId?.id}/comments/${commentList.id}`);
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
