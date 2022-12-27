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
} from './profileInfoStyle';

const ProfileInfo = ({ info }) => {
  const navigate = useNavigate();
  const [btnOn, setBtnOn] = useState(false);

  return (
    <div>
      <Img src={info.image} />
      <Container>
        <Info>
          <Name>{info.username}</Name>
          <Follow>
            <Follower
              onClick={() => {
                navigate(`/profile/follower`);
              }}
            >
              팔로워 <span>{info.followerCount}</span>
            </Follower>
            <Following
              onClick={() => {
                navigate(`/profile/following`);
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
        ) : (
          <GoFollow
            onClick={() => {
              console.log('클릭');
            }}
          >
            {info.isfollow ? <p>언팔로우</p> : <p>팔로우</p>}
          </GoFollow>
        )}
      </Container>
    </div>
  );
};

export default ProfileInfo;
