import styled from 'styled-components';
import addPic from '../../../assets/icons/icon-photo-upload-white.svg';

export const SubmitImg = styled.label`
  width: 36px;
  height: 36px;
  background-color: var(--deep-gray);
  border-radius: 50%;
  background-image: url(${addPic});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 30px;
  top: 280px;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 224px;
  background-color: var(--light-gray);
  border-radius: 10px;
  border: 1px solid var(--deep-gray);
  margin: 18px 0;
`;
