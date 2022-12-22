import { useNavigate } from 'react-router-dom';
import BasicProFile from '../../assets/icons/basic-profile-rec.svg';
import PhotoUpload from '../../assets/icons/icon-photo-upload-black.svg';
import {
  Img,
  Container,
  Info,
  Name,
  Follow,
  Follower,
  Following,
  AddPhotoZone,
  // GoFollow,
} from './profileInfoStyle';

const ProfileInfo = ({ info }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Img src={info.image ? info.image : BasicProFile} />
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
        <AddPhotoZone
          onClick={() => {
            navigate(`/profile/uploadphotozone`);
          }}
        >
          <img src={PhotoUpload} alt="포토존 등록 버튼 이미지" />
          <p>포토존 등록</p>
        </AddPhotoZone>

        {/* <GoFollow><p>팔로우 하기</p></GoFollow> */}
      </Container>
    </div>
  );
};

export default ProfileInfo;
