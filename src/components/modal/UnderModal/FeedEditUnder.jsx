import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FeedDeleteModal from '../ConfirmModal/FeedDeleteModal';
import ReportMiniModal from '../ConfirmModal/ReportMiniModal';
import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
  CommentModalWrap,
} from './underModalStyle';

const FeedEditUnder = ({ posts, closeModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const target = location.pathname;
  const [del, setDel] = useState(false);
  const [report, setReport] = useState(false);
  const deleteHandler = () => {
    setDel(!del);
  };

  const ReportPost = async () => {
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const authToken = localStorage.getItem('token');
      const res = await axios.post(`${URL}/post/${posts.id}/report`, [], {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      console.log('ReportPost 응답 : ', res);
      setReport(!report);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {del ? (
        <FeedDeleteModal deleteHandler={deleteHandler} posts={posts} />
      ) : null}

      {target === '/profile' ? (
        <UnderModalWrap className="fd-under-modal">
          <UnderModalCloseBtn />
          <UnderModalCont>
            <button
              type="button"
              onClick={() => {
                setDel(!del);
              }}
            >
              삭제
            </button>
          </UnderModalCont>
          <UnderModalCont>
            <button
              type="button"
              onClick={() => {
                navigate('/profile/editfeed', {
                  state: { posts: { posts } },
                });
              }}
            >
              수정
            </button>
          </UnderModalCont>
        </UnderModalWrap>
      ) : (
        <>
          <CommentModalWrap>
            <UnderModalCloseBtn />
            <UnderModalCont onClick={ReportPost}>
              <button type="button">신고하기</button>
            </UnderModalCont>
          </CommentModalWrap>
          {report ? <ReportMiniModal closeModal={closeModal} /> : null}
        </>
      )}
    </>
  );
};

export default FeedEditUnder;
