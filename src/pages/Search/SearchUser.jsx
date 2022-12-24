import { useNavigate } from 'react-router-dom';
import { User, UserProfile, UserInfo, UserName, UserId } from './searchStyle';

const SearchUser = ({ userimg, name, id }) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/otherProfile');
  };
  return (
    <User onClick={() => handleProfile()}>
      <UserProfile src={userimg} alt="" />
      <UserInfo>
        <UserName>{name}</UserName>
        <UserId>@ {id}</UserId>
      </UserInfo>
    </User>
  );
};

export default SearchUser;
