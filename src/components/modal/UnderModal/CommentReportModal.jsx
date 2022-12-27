import axios from 'axios';
import {
  CommentModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
} from './underModalStyle';

const ReportUnder = ({ postDetailId, commentList, setComment }) => {
  // const reportModalHandler = () => {
  //   return
  // };

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
      setComment('');
      // alert('신고하신 내용이 접수되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentModalWrap>
      <UnderModalCloseBtn />
      <UnderModalCont
        onClick={() => {
          ReportComment();
          // eslint-disable-next-line no-alert
          alert('신고하신 내용이 접수되었습니다.');
        }}
      >
        <button type="button">신고하기</button>
      </UnderModalCont>
    </CommentModalWrap>
  );
};

export default ReportUnder;
