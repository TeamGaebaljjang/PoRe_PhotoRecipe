// import { useState } from 'react';
import { ConfirmModal, Btnwrap } from './confirmModalStyle';

const ReportMiniModal = ({ closeModal }) => {
  const accountName = localStorage.getItem('accountname');

  return (
    <ConfirmModal>
      <h3>
        {accountName}님, 신고하신 내용이 정상적으로 전달되었습니다.
        <span>
          PORE는 해당 내용 검토 후<br /> 적절하게 조치할 예정입니다.
        </span>
      </h3>
      <Btnwrap
        onClick={() => {
          closeModal();
        }}
      >
        <button type="button">닫기</button>
      </Btnwrap>
    </ConfirmModal>
  );
};

export default ReportMiniModal;
