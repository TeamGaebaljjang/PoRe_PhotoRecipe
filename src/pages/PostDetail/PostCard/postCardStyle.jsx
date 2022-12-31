import styled from 'styled-components';
import imageProfile from '../../../assets/img/profile.png';

export const CardWrap = styled.div`
  position: relative;
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Comments = styled.div`
  border-top: 1px solid var(--gray);
  padding-top: 5px;
  padding-bottom: 60px;
  background-color: white;
  overflow: auto;
`;

export const Form = styled.form`
  position: fixed;
  bottom: 0px;
  padding: 12px 20px;
  gap: 20px;
  width: 390px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -4px 7px -4px var(--gray);
  background-color: white;
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      width: 100%;
    }
  }
`;

export const Input = styled.textarea`
  width: 250px;
  resize: none;
  border: none;
  overflow: hidden;
  &::placeholder {
    color: var(--gray);
  }
  &:focus {
    outline: none;
  }
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      flex-grow: 1;
    }
  }
`;

export const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${imageProfile});
  background-size: 36px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BtnSubmit = styled.button`
  color: var(--gray);

  &:enabled {
    color: var(--black);
  }
`;
