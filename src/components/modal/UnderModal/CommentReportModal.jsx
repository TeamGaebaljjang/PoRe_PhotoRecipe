import axios from 'axios';
import { useState } from 'react';
import ReportMiniModal from '../ConfirmModal/ReportMiniModal';
import {
  CommentModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const ReportUnder = ({ postDetailId, commentList, setComment, closeModal }) => {
  const [confirm, setConfirm] = useState(false);

  const ReportComment = async () => {
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const authToken = localStorage.getItem('token');
      const res = await axios.post(
        `${URL}/post/${postDetailId?.id}/comments/${commentList.id}/report`,
        [],
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log('ReportComment 응답 : ', res);
      setConfirm(!confirm);
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CommentModalWrap>
        <UnderModalCloseBtn />
        <UnderModalCont onClick={ReportComment}>
          <button type="button">신고하기</button>
        </UnderModalCont>
      </CommentModalWrap>
      {confirm ? <ReportMiniModal closeModal={closeModal} /> : null}
    </>
  );
};

export default ReportUnder;
