import styled from 'styled-components';
import BtnAddPic from '../../../components/button/BtnAddPic';

const ProfileContDiv = styled.div`
  background-color: white;
  min-height: 614px;
  margin-top: 20px;
  padding: 0 20px;

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: var(--super-gray);
    text-align: center;
  }
`;

const ProfileImgWrap = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  border-radius: 50%;
  margin: 26px auto;
  background-color: var(--light-gray);
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AddPickBtn = styled(BtnAddPic)`
  position: absolute;
  top: 230px;
  right: 130px;
`;

export { ProfileContDiv, ProfileImgWrap, ProfileImg, AddPickBtn };
