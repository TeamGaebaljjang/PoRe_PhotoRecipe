import { useNavigate } from 'react-router-dom';
import { User, UserProfile, UserInfo, UserName, UserId } from './searchStyle';
import SearchHighlighting from './SearchHighlighting';

const SearchUser = ({ props, keyword }) => {
  const navigate = useNavigate();

  const handleProfile = () => {
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
        <UserName>
          <SearchHighlighting
            user={props.username}
            keyword={keyword}
            type="username"
          />
        </UserName>
        <UserId>
          @&nbsp;
          <SearchHighlighting
            user={props.accountname}
            keyword={keyword}
            type="accountname"
          />
        </UserId>
      </UserInfo>
    </User>
  );
};

export default SearchUser;
