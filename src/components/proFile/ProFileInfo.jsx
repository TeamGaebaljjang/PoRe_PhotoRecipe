import styled from 'styled-components';
import ProFileBasic from '../../assets/icons/basic-profile-rec.svg';
import PhotoUpload from '../../assets/icons/icon-photo-upload-black.svg';

const Img = styled.img`
  margin-top: 22px;
  margin-left: 38px;
  background-image: url(${(props) => props.src});
  background-color: var(--gray);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 34px;
`;

const Info = styled.div`
  margin-left: 38px;

  .name {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .follow {
    display: flex;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
  }
  .follower {
    height: 18px;
    border-right: 2px solid var(--light-gray);
    padding-right: 8px;
  }
`;

const AddPhotoZone = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 120px;
  height: 40px;
  margin-right: 20px;
  border: 1px var(--black) solid;
  border-radius: 80px;
`;

const ProFileInfo = () => {
  return (
    <div>
      <Img src={ProFileBasic} />
      <Container>
        <Info>
          <p className="name">개발짱</p>
          <div className="follow">
            <p className="follower">팔로워 0</p>
            <p>팔로잉 0</p>
          </div>
        </Info>
        <AddPhotoZone>
          <img src={PhotoUpload} alt="포토존 등록 버튼 이미지" />
          <p>포토존 등록</p>
        </AddPhotoZone>
      </Container>
    </div>
  );
};

export default ProFileInfo;
