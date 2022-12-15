import {
  User,
  UserProfile,
  UserInfo,
  UserName,
  UserId,
  More,
} from './postStyle';
import profile from '../../assets/icons/basic-profile-round.svg';
import more from '../../assets/icons/icon-more-vertical-gray.svg';

const PostUserInfo = () => {
  return (
    <User>
      <UserProfile src={profile} alt="" />
      <UserInfo>
        <UserName>포토레시피</UserName>
        <UserId>@ PoRe_PhotoRecipe</UserId>
      </UserInfo>
      <More src={more} alt="" />
    </User>
  );
};

export default PostUserInfo;
