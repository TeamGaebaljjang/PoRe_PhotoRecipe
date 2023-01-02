import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  height: calc(100vh - 48px);
  overflow: auto;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) {
    & {
      padding: 0 10%;
    }
  }
  @media all and (min-width: 941px) {
    & {
      padding: 0 20%;
    }
  }
`;
// 제거예정
export const Li = styled.li`
  position: relative;
`;

export const BtnFollow = styled.button`
  position: relative;
  top: 20px;
  right: 10px;
  width: 55px;
  height: 28px;
  border-radius: 28px;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.color};
  font-size: 12px;

  ${(p) =>
    p.cancel &&
    css`
      background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.color};
    `}
`;
