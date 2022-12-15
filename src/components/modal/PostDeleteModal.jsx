import { ConfirmModal, Btnwrap } from './ConfirmModalStyle';

const PostDeleteModal = () => {
  return (
    <ConfirmModal>
      <h3>게시글을 삭제할까요?</h3>
      <Btnwrap>
        <button type="button">취소</button>
        <button type="button" className="caution-option">
          삭제
        </button>
      </Btnwrap>
    </ConfirmModal>
  );
};

export default PostDeleteModal;
