import { useNavigate } from 'react-router-dom';
import { User, UserProfile, UserInfo, UserName, UserId } from './searchStyle';
import SearchHighlighting from './SearchHighlighting';
import defaultProfileImg from '../../assets/icons/basic-profile-round.svg';

const SearchUser = ({ props, keyword }) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/otherProfile', {
      state: {
        accountname: `${props.accountname}`,
      },
    });
  };

  const onErrorImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultProfileImg;
  };

  return (
    <User onClick={() => handleProfile()}>
      <UserProfile src={props.image} alt="" onError={onErrorImg} />
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
