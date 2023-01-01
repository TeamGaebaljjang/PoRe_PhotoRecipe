import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: calc(50vw - 195px);
  z-index: 20;
  width: 390px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
  @media all and (min-width: 720px) {
    & {
      position: fixed;
      width: 100vw;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

export const BackDropWhite = styled.div`
  position: fixed;
  left: calc(50vw - 195px);
  top: 0;
  z-index: 20;
  width: 390px;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
  @media all and (min-width: 720px) {
    & {
      position: fixed;
      width: 100vw;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  padding-bottom: 60px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) {
    & {
      width: calc(100vw - 126px);
      margin-left: 126px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: calc(100vw - 240px);
      margin-left: 240px;
    }
  }
`;
