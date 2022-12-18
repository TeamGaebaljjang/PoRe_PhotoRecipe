import { User, UserProfile, UserInfo, UserName, UserId } from './searchStyle';
import profile from '../../assets/icons/basic-profile-round.svg';

const SearchUser = () => {
  return (
    <User>
      <UserProfile src={profile} alt="" />
      <UserInfo>
        <UserName>포토레시피</UserName>
        <UserId>@ PoRe_PhotoRecipe</UserId>
      </UserInfo>
    </User>
  );
};

export default SearchUser;
