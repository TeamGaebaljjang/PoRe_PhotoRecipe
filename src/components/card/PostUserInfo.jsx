import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  UserProfile,
  UserInfo,
  UserName,
  UserId,
  More,
  BackDrop,
} from './postStyle';
import FeedEditUnder from '../modal/UnderModal/FeedEditUnder';
import more from '../../assets/icons/icon-more-vertical-gray.svg';
import defaultProfileImg from '../../assets/icons/basic-profile-round.svg';

const PostUserInfo = ({ posts }) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const accountName = localStorage.getItem('accountname');
  const userInfo = posts.author.accountname;

  const userCheck = () => {
    if (accountName === userInfo) {
      navigate('/profile', {
        state: {
          accountname: `${userInfo}`,
        },
      });
    } else {
      navigate('/otherProfile', {
        state: {
          accountname: `${userInfo}`,
        },
      });
    }
  };

  const modalHandler = () => {
    setModal(!modal);
  };

  const onErrorImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultProfileImg;
  };

  return (
    <User>
      <UserProfile
        src={posts.author.image}
        alt=""
        onClick={() => {
          userCheck();
        }}
        onError={onErrorImg}
      />
      <UserInfo
        onClick={() => {
          userCheck();
        }}
      >
        <UserName>{posts.author.username}</UserName>
        <UserId>@ {posts.author.accountname}</UserId>
      </UserInfo>
      <More src={more} alt="" onClick={modalHandler} />
      {modal ? (
        <BackDrop
          onClick={() => {
            setModal(!modal);
          }}
        />
      ) : null}
      {modal ? <FeedEditUnder posts={posts} closeModal={modalHandler} /> : null}
    </User>
  );
};

export default PostUserInfo;
