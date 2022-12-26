import styled from 'styled-components';
import imageProfile from '../../../assets/img/profile.png';

export const CardWrap = styled.div`
  position: relative;
  height: 100vh;
  overflow: auto;
`;

export const Comments = styled.div`
  border-top: 1px solid var(--gray);
  padding-bottom: 60px;
  background-color: white;
  overflow: auto;
`;

export const Form = styled.form`
  position: fixed;
  bottom: 0px;
  padding: 12px;
  gap: 20px;
  width: 390px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--gray);
  background-color: white;
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
`;

export const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${imageProfile});
  background-size: 36px;
`;

export const BtnSubmit = styled.button`
  color: var(--gray);
`;
