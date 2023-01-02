import { useNavigate } from 'react-router-dom';
import {
  Img,
  Container,
  Info,
  Name,
  Follow,
  Follower,
  Following,
  AddPhotoZone,
  GoFollow,
  GoUnFollow,
} from './profileInfoStyle';
import defaultProfileImg from '../../assets/icons/basic-profile-rec.svg';

const ProfileInfo = ({ info, isfollow, follow, unFollow }) => {
  const navigate = useNavigate();

  const onErrorImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultProfileImg;
  };

  return (
    /* eslint-disable */
    <div>
      <Img src={info.image} onError={onErrorImg} />
      <Container>
        <Info>
          <Name>{info.username}</Name>
          <Follow>
            <Follower
              onClick={() => {
                navigate(`/profile/follower`, {
                  state: {
                    accountname: `${info.accountname}`,
                  },
                });
              }}
            >
              팔로워 <span>{info.followerCount}</span>
            </Follower>
            <Following
              onClick={() => {
                navigate(`/profile/following`, {
                  state: {
                    accountname: `${info.accountname}`,
                  },
                });
              }}
            >
              팔로잉 <span>{info.followingCount}</span>
            </Following>
          </Follow>
        </Info>
        {localStorage.getItem('accountname') === info.accountname ? (
          <AddPhotoZone
            onClick={() => {
              navigate(`/profile/uploadphotozone`);
            }}
          >
            <p>포토존 등록</p>
          </AddPhotoZone>
        ) : isfollow ? (
          <GoUnFollow onClick={unFollow}>
            <p>언팔로우</p>
          </GoUnFollow>
        ) : (
          <GoFollow onClick={follow}>
            <p>팔로우</p>
          </GoFollow>
        )}
      </Container>
    </div>
    /* eslint-enable */
  );
};
export default ProfileInfo;
