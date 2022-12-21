import styled from 'styled-components';

export const BackDrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  width: 390px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);
`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
