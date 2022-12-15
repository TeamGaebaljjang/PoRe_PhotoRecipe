import styled from 'styled-components';
import BtnAddPic from '../../../components/button/BtnAddPic';

const EditProfileContDiv = styled.div`
  background-color: white;
  min-height: 614px;
  margin-top: 20px;
  padding: 0 20px;

  h2 {
    font-size: 24px;
    text-align: center;
  }

  .profile-img-wrap {
    position: relative;
    width: 116px;
    height: 116px;
    border-radius: 50%;
    margin: 40px auto;
    background-color: var(--light-gray);
  }

  .profile-img-wrap img {
    width: 100%;
  }
`;

const ProfileImgWrap = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  border-radius: 50%;
  margin: 26px auto;
  background-color: var(--light-gray);

  img {
    width: 100%;
  }
`;

const AddPickBtn = styled(BtnAddPic)`
  position: absolute;
  top: 80px;
  left: 88px;
`;

export { EditProfileContDiv, ProfileImgWrap, AddPickBtn };
