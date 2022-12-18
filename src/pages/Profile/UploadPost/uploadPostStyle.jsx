import styled from 'styled-components';
import addPic from '../../../assets/icons/icon-photo-upload-white.svg';

export const Wrap = styled.div`
  margin: 0 20px;
`;
export const Input = styled.textarea`
  margin-top: 20px;
  width: 100%;
  max-height: 400px;
  resize: none;
  border: none;

  &::placeholder {
    color: var(--light-gray);
  }
  &:focus {
    outline: none;
  }
`;
export const PreviewImg = styled.img`
  width: 100%;
  max-height: 230px;
  margin: 18px 0;
  border-radius: 10px;
`;

export const SubmitImg = styled.label`
  width: 36px;
  height: 36px;
  background-color: var(--black);
  border-radius: 50%;
  background-image: url(${addPic});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;
