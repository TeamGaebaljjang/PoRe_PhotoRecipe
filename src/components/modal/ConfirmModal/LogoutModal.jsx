import { ConfirmModal, Btnwrap } from './confirmModalStyle';

const LogoutModal = ({ logoutHandler }) => {
  return (
    <ConfirmModal>
      <h3>로그아웃하시겠어요?</h3>
      <Btnwrap>
        <button
          type="button"
          onClick={() => {
            logoutHandler();
          }}
        >
          취소
        </button>
        <button type="button" className="caution-option">
          로그아웃
        </button>
      </Btnwrap>
    </ConfirmModal>
  );
};

export default LogoutModal;
