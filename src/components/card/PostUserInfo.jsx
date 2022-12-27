import { useNavigate } from 'react-router-dom';
import {
  User,
  UserProfile,
  UserInfo,
  UserName,
  UserId,
  More,
} from './postStyle';
import more from '../../assets/icons/icon-more-vertical-gray.svg';

const PostUserInfo = ({ posts }) => {
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

  return (
    <User
      onClick={() => {
        userCheck();
      }}
    >
      <UserProfile src={posts.author.image} alt="" />
      <UserInfo>
        <UserName>{posts.author.username}</UserName>
        <UserId>@ {posts.author.accountname}</UserId>
      </UserInfo>
      <More src={more} alt="" />
    </User>
  );
};

export default PostUserInfo;
