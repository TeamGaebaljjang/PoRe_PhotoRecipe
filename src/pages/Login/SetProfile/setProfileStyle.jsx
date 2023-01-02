import styled from 'styled-components';
import addPic from '../../../assets/icons/icon-photo-upload-white.svg';

export const ProfileContDiv = styled.div`
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

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

export const ProfileImgWrap = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  border-radius: 50%;
  margin: 26px auto;
  background-color: var(--light-gray);
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileImgLabel = styled.label`
  position: absolute;
  top: 80px;
  right: -6px;
  width: 36px;
  height: 36px;
  background-color: var(--black);
  border-radius: 50%;
  background-image: url(${addPic});
  background-repeat: no-repeat;
  background-position: center;

  &.set-profile {
    top: 100px;
  }
`;
