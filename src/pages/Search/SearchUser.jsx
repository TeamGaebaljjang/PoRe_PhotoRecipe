import { useNavigate } from 'react-router-dom';
import { User, UserProfile, UserInfo, UserName, UserId } from './searchStyle';

const SearchUser = ({ props }) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    console.log(props);
    navigate('/otherProfile', {
      state: {
        id: `${props.id}`,
        image: `${props.image}`,
        username: `${props.username}`,
        accountname: `${props.accountname}`,
        intro: `${props.intro}`,
        follower: `${props.follower}`,
        followerCount: `${props.followerCount}`,
        following: `${props.following}`,
        followingCount: `${props.followingCount}`,
        infollow: `${props.infollow}`,
      },
    });
  };
  return (
    <User onClick={() => handleProfile()}>
      <UserProfile src={props.image} alt="" />
      <UserInfo>
        <UserName>{props.username}</UserName>
        <UserId>@ {props.accountname}</UserId>
      </UserInfo>
    </User>
  );
};

export default SearchUser;
