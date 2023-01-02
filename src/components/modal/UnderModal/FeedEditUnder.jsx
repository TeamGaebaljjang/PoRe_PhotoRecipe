import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FeedDeleteModal from '../ConfirmModal/FeedDeleteModal';
import {
  UnderModalWrap,
  UnderModalCont,
  UnderModalCloseBtn,
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
        <FeedDeleteModal deleteHandler={deleteHandler} posts={posts} />
      ) : null}

      <UnderModalWrap
        className={
          target === '/feed/feeddetail'
            ? 'fd-under-modal detail'
            : 'fd-under-modal'
        }
      >
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
    </>
  );
};

export default FeedEditUnder;
