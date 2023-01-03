import styled from 'styled-components';

export const ModeBtn = styled.button`
  width: 45px;
  height: 45px;
  position: fixed;
  bottom: 120px;
  left: calc(50% + 144px);

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
      width: 70px;
      height: 40px;
      position: absolute;
      left: 15px;
      bottom: 15px;
      z-index: 40;
      background-repeat: no-repeat;
      background-size: 70px;
    }
  }
`;
