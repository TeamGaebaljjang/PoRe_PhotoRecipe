import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ConfirmModal, Btnwrap } from './confirmModalStyle';

const FeedDeleteModal = ({ deleteHandler, posts }) => {
  const feedId = posts.id;
  const navigate = useNavigate();

  async function deleteFeed(value) {
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const authToken = localStorage.getItem('token');
      const res = await axios.delete(`${URL}/post/${value}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      if (res) {
        navigate(0);
      }
    } catch (error) {
      console.log(error.res);
    }
  }

  return (
    <ConfirmModal>
      <h3>게시물을 삭제할까요?</h3>
      <Btnwrap>
        <button
          type="button"
          onClick={() => {
            deleteHandler();
          }}
        >
          취소
        </button>
        <button
          type="button"
          className="caution-option"
          onClick={() => {
            deleteFeed(feedId);
          }}
        >
          삭제
        </button>
      </Btnwrap>
    </ConfirmModal>
  );
};

export default FeedDeleteModal;
