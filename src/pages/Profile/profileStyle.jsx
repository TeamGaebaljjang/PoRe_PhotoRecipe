import styled from 'styled-components';

export const BackDrop = styled.div`
  position: absolute;
  width: 390px;
  height: 100vh;
  background-color: black;
  opacity: 50%;
`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
