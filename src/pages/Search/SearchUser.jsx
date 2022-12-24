import { User, UserProfile, UserInfo, UserName, UserId } from './searchStyle';

const SearchUser = ({ userimg, name, id }) => {
  return (
    <User>
      <UserProfile src={userimg} alt="" />
      <UserInfo>
        <UserName>{name}</UserName>
        <UserId>@ {id}</UserId>
      </UserInfo>
    </User>
  );
};

export default SearchUser;
