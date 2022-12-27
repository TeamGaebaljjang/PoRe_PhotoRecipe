import { useState } from 'react';
import { ConfirmModal, Btnwrap } from './confirmModalStyle';

const ReportMiniModal = () => {
  const [modal, setModal] = useState(false);

  const ModalHandler = () => {
    setModal(!modal);
  };

  return (
    <ConfirmModal>
      <h3>신고하신 내용이 접수되었습니다.</h3>
      <Btnwrap>
        <button
          type="button"
          onClick={() => {
            ModalHandler();
          }}
        >
          닫기
        </button>
      </Btnwrap>
    </ConfirmModal>
  );
};

export default ReportMiniModal;
