import { useNavigate } from 'react-router-dom';
import { ConfirmModal, Btnwrap } from './confirmModalStyle';

const LogoutModal = ({ logoutHandler }) => {
  const navigate = useNavigate();
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
        <button
          type="button"
          className="caution-option"
          onClick={() => {
            localStorage.clear();
            navigate('/login');
          }}
        >
          로그아웃
        </button>
      </Btnwrap>
    </ConfirmModal>
  );
};

export default LogoutModal;
