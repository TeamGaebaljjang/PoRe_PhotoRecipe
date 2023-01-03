import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReportMiniModal from '../ConfirmModal/ReportMiniModal';
import {
  CommentModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const PostReportModal = ({ postDetailId, closeModal }) => {
  const [report, setReport] = useState(false);
  const location = useLocation();
  const target = location.pathname;

  // 게시글 신고
  const ReportPost = async () => {
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const authToken = localStorage.getItem('token');
      const res = await axios.post(
        `${URL}/post/${postDetailId.id}/report`,
        [],
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      if (res) {
        setReport(!report);
      }
    } catch (error) {
      console.log(error.res);
    }
  };

  return (
    <>
      <CommentModalWrap
        className={
          target === '/feed' || target === '/otherProfile'
            ? 'detail-modal comment-modal'
            : 'detail-modal detail comment-modal detail'
        }
      >
        <UnderModalCloseBtn />
        <UnderModalCont onClick={ReportPost}>
          <button type="button">신고하기</button>
        </UnderModalCont>
      </CommentModalWrap>
      {report ? <ReportMiniModal closeModal={closeModal} /> : null}
    </>
  );
};

export default PostReportModal;
