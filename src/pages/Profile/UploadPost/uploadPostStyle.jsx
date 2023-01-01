import styled from 'styled-components';
import addPic from '../../../assets/icons/icon-photo-upload-white.svg';
import closePic from '../../../assets/icons/icon-close.svg';

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
export const SubmitImg = styled.label`
  width: 36px;
  height: 36px;
  background-color: var(--gray);
  border-radius: 50%;
  background-image: url(${addPic});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 16px;
  bottom: 16px;
  :hover {
    background-color: var(--black);
  }
`;
export const SubmitImgWrap = styled.div`
  display: flex;
  width: 350px;
  max-height: 230px;
  padding-bottom: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: var(--gray);
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  @media all and (min-width: 720px) {
    & {
      width: calc(100vw - 6%);
      margin: 0 20px;
    }
  }
`;
export const PreviewImg = styled.img`
  width: 350px;
  max-height: 228px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
  &.edit-img {
    height: 100%;
  }
`;

export const PhotoWrap = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  background: url(${closePic}) no-repeat;
`;
