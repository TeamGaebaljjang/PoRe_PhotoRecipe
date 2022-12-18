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
  GoFollow,
} from './proFileInfoStyle';

const ProFileInfo = () => {
  return (
    <div>
      <Img src={BasicProFile} />
      <Container>
        <Info>
          <Name>개발짱</Name>
          <Follow>
            <Follower>
              팔로워 <span>0</span>
            </Follower>
            <Following>
              팔로잉 <span>0</span>
            </Following>
          </Follow>
        </Info>
        <AddPhotoZone>
          <img src={PhotoUpload} alt="포토존 등록 버튼 이미지" />
          <p>포토존 등록</p>
        </AddPhotoZone>

        <GoFollow>
          <p>팔로우 하기</p>
        </GoFollow>
      </Container>
    </div>
  );
};

export default ProFileInfo;
