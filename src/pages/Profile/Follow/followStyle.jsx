import styled, { css } from 'styled-components';

export const Li = styled.li`
  position: relative;
`;
export const BtnFollow = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 55px;
  height: 28px;
  border-radius: 28px;
  background-color: black;
  color: white;
  border: 1px solid black;

  ${(p) =>
    p.cancel &&
    css`
      background-color: white;
      color: black;
    `}
`;
