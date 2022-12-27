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

const PostUserInfo = ({ posts }) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const accountName = localStorage.getItem('accountname');
  const userInfo = posts.author.accountname;

  const userCheck = () => {
    if (accountName === userInfo) {
      navigate('/profile', {
        state: {
          accountname: `${posts.author.accountname}`,
        },
      });
    } else {
      navigate('/otherProfile', {
        state: {
          accountname: `${posts.author.accountname}`,
        },
      });
    }
  };

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <User>
      <UserProfile
        src={posts.author.image}
        alt=""
        onClick={() => {
          userCheck();
        }}
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
            console.log('모달클릭');
            setModal(!modal);
          }}
        />
      ) : null}
      {modal ? <FeedEditUnder modalHandler={modalHandler} /> : null}
    </User>
  );
};

export default PostUserInfo;
