import { useNavigate } from 'react-router-dom';
import { ConfirmModal, Btnwrap } from './confirmModalStyle';
import { api } from '../../../axiosInstance';

const FeedDeleteModal = ({ deleteHandler, posts }) => {
  const feedId = posts.id;
  const navigate = useNavigate();

  async function deleteFeed(value) {
    try {
      const res = await api.delete(`/post/${value}`);
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
