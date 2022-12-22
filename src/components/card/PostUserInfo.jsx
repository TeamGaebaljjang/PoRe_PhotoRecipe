import {
  User,
  UserProfile,
  UserInfo,
  UserName,
  UserId,
  More,
} from './postStyle';
// import profile from '../../assets/icons/basic-profile-round.svg';
import more from '../../assets/icons/icon-more-vertical-gray.svg';

const PostUserInfo = ({ posts }) => {
  return (
    <User>
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
