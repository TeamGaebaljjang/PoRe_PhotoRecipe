import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FeedeleteModal from '../ConfirmModal/FeedeleteModal';
import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
  CommentModalWrap,
} from './underModalStyle';

const FeedEditUnder = ({ posts }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const target = location.pathname;
  const [del, setDel] = useState(false);
  const deleteHandler = () => {
    setDel(!del);
  };

  return (
    <>
      {del ? (
        <FeedeleteModal deleteHandler={deleteHandler} posts={posts} />
      ) : null}

      {target === '/profile' ? (
        <UnderModalWrap style={{ marginLeft: '-20px' }}>
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
        <CommentModalWrap style={{ marginLeft: '-20px' }}>
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
        </CommentModalWrap>
      )}
    </>
  );
};

export default FeedEditUnder;
