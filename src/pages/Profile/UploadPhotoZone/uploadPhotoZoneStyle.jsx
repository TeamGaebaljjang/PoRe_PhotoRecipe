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
  right: 8px;
  top: 195px;
  :hover {
    background-color: var(--black);
  }
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 224px;
  background-color: var(--light-gray);
  border-radius: 10px;
  border: 1px solid var(--deep-gray);
  margin: 18px 0;
  object-fit: cover;
`;

export const PhotoWrap = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 25px;
  right: 8px;
  width: 15px;
  height: 15px;
  line-height: 1px;
  background-color: var(--light-gray);
  border-radius: 3px;
`;
