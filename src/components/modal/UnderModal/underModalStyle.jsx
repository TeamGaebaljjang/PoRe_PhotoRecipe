import styled from 'styled-components';

export const UnderModalWrap = styled.ul`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  position: fixed;
  bottom: 0;
  margin-bottom: 50px;
  padding: 10px 25px;
  width: 390px;
  border-radius: 10px 10px 0 0;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 30;
  animation-name: appear;
  animation-duration: 0.5s;
  @keyframes appear {
    0% {
      bottom: calc(-1 * (100vh - (100vh / 1.2)));
    }
    100% {
      bottom: 0px;
    }
  }
  &.pz-under-modal {
    margin-left: -26px;
  }
  &.fd-under-modal {
    margin-left: -20px;
  }
  &.fd-under-modal.detail {
    margin-bottom: 0;
  }

  @media all and (min-width: 720px) {
    & {
      width: calc(100vw - 126px);
      margin-bottom: 0;
      right: 0;
    }
    &.pz-under-modal {
      margin-left: 126px;
    }
    &.fd-under-modal.detail {
      width: 100vw;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: calc(100vw - 240px);
    }
  }
`;

export const UnderModalCloseBtn = styled.button`
  width: 340px;
  height: 20px;
  border-radius: 10px 10px 0 0;
  margin: 0 auto;
  &::after {
    content: '';
    display: block;
    border-radius: 5px;
    margin: 0 auto;
    background-color: var(--gray);
    width: 50px;
    height: 4px;
  }
  @media all and (min-width: 720px) {
    & {
      width: 100%;
      padding-bottom: 10px;
    }
  }
`;

export const UnderModalCont = styled.li`
  font-size: 14px;
  line-height: 55px;
  cursor: pointer;
  button {
    color: ${(props) => props.theme.color};
  }
  @media all and (min-width: 720px) {
    & {
      text-align: center;
    }
  }
`;

export const CommentModalWrap = styled.ul`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  position: fixed;
  bottom: 0;
  margin-bottom: 50px;
  padding: 15px 25px;
  width: 390px;
  border-radius: 10px 10px 0 0;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 30;
  animation-name: appear;
  animation-duration: 0.5s;
  @keyframes appear {
    0% {
      bottom: calc(-1 * (100vh - (100vh / 1.2)));
    }
    100% {
      bottom: 0px;
    }
  }
  &.comment-modal {
    margin-left: -20px;
  }
  &.comment-modal.detail {
    margin-bottom: 0;
  }
  @media all and (min-width: 720px) {
    & {
      width: calc(100vw - 126px);
      margin-bottom: 0;
      right: 0;
    }
    &.detail-modal.detail {
      width: 100vw;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: calc(100vw - 240px);
      margin-bottom: 0;
      right: 0;
    }
    &.detail-modal.detail {
      width: 100vw;
    }
  }
`;
