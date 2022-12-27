import axios from 'axios';
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
  const deleteComment = async () => {
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const authToken = localStorage.getItem('token');
      const res = await axios.delete(
        `${URL}/post/${postDetailId?.id}/comments/${commentList.id}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log('deleteComment 응답 : ', res);
      getComments();
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentModalWrap>
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
