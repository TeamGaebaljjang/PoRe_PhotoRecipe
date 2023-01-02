import styled from 'styled-components';

export const ModeBtn = styled.button`
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 120px;
  right: 7px;
  z-index: 40;
  background-repeat: no-repeat;
  background-size: 43px;
  @media all and (min-width: 720px) {
    & {
      display: none;
    }
  }
`;

export const ModeBtnLarge = styled.button`
  display: none;
  @media all and (min-width: 720px) {
    & {
      display: block;
      width: 55px;
      height: 35px;
      position: absolute;
      left: 15px;
      bottom: 10px;
      z-index: 40;
      background-repeat: no-repeat;
      background-size: 55px;
    }
  }
`;
