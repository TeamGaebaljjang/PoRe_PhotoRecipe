import styled, { css } from 'styled-components';
import addPic from '../../../assets/icons/icon-photo-upload-white.svg';

export const ChatWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 108px;
  position: absolute;
  bottom: 60px;
  overflow: auto;
  overflow-x: hidden;
`;
export const ChatBallon = styled.div`
  margin: 10px;
  position: relative;
  display: flex;

  ${(p) =>
    p.mine &&
    css`
      flex-direction: row-reverse;
    `}
`;
export const Chatting = styled.p`
  position: relative;
  margin-left: 10px;
  padding: 10px;
  word-wrap: break-word;
  background-color: white;
  border: 1px solid var(--deep-gray);
  border-radius: 0 10px 10px 10px;
  max-width: 250px;
  font-size: 14px;

  ${(p) =>
    p.mine &&
    css`
      max-width: 250px;
      border-radius: 10px 0px 10px 10px;
      background-color: black;
      color: white;
    `}
`;
export const ChatTime = styled.span`
  position: absolute;
  bottom: 0;
  right: -30px;
  color: var(--super-gray);
  font-size: 10px;

  ${(p) =>
    p.mine &&
    css`
      left: -30px;
    `}
`;
export const ChatInputWrap = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  bottom: 0;
  background-color: white;
  width: 390px;
  height: 60px;
`;

export const InputChat = styled.input``;

export const SubmitImg = styled.label`
  width: 36px;
  height: 36px;
  background-color: var(--deep-gray);
  border-radius: 50%;
  background-image: url(${addPic});
  background-repeat: no-repeat;
  background-position: center;
`;
