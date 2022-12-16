import BasicProFile from '../../assets/icons/basic-profile-rec.svg';
import PhotoUpload from '../../assets/icons/icon-photo-upload-black.svg';
import * as styled from './profileinfoStyle';

const ProFileInfo = () => {
  return (
    <div>
      <styled.Img src={BasicProFile} />
      <styled.Container>
        <styled.Info>
          <styled.Name>개발짱</styled.Name>
          <styled.Follow>
            <styled.Follower>
              팔로워 <span>0</span>
            </styled.Follower>
            <styled.Following>
              팔로잉 <span>0</span>
            </styled.Following>
          </styled.Follow>
        </styled.Info>
        <styled.AddPhotoZone>
          <img src={PhotoUpload} alt="포토존 등록 버튼 이미지" />
          <p>포토존 등록</p>
        </styled.AddPhotoZone>
      </styled.Container>
    </div>
  );
};

export default ProFileInfo;
