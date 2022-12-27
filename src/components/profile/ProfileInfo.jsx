import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoUpload from '../../assets/icons/icon-photo-upload-black.svg';
import PhotoUploadOn from '../../assets/icons/icon-photo-upload-white.svg';

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

const ProfileInfo = ({ info, isfollow, follow, unFollow }) => {
  const navigate = useNavigate();
  const [btnOn, setBtnOn] = useState(false);

  return (
    /* eslint-disable */
    <div>
      <Img src={info.image} />
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
            onMouseOver={() => {
              setBtnOn(true);
            }}
            onMouseOut={() => {
              setBtnOn(false);
            }}
            onClick={() => {
              navigate(`/profile/uploadphotozone`);
            }}
          >
            <img
              src={btnOn ? PhotoUploadOn : PhotoUpload}
              alt="포토존 등록 버튼 이미지"
            />
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
