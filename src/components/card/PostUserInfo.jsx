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
  return (
    <User
      onClick={() => {
        navigate('/otherProfile', {
          state: {
            accountname: `${posts.author.accountname}`,
          },
        });
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
