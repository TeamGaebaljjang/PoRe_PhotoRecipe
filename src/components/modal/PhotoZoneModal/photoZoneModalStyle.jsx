import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 390px;
  height: calc(100vh - (100vh / 3));
  background-color: white;
  padding-bottom: 60px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0 0 10px var(--deep-gray);
  overflow: hidden;
  z-index: 30;
  animation-name: appear;
  animation-duration: 0.8s;
  @keyframes appear {
    0% {
      bottom: calc(-1 * (100vh - (100vh / 2.6)));
    }
    100% {
      bottom: 0px;
    }
  }
  .region {
    width: 390px;
    height: 50px;
    border-bottom: 1px var(--light-gray) solid;
    box-shadow: 0 4px 7px -4px var(--gray);
  }
  .region p {
    padding: 15px 30px;
  }
  .scroll {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    height: calc(100% - 60px);
    overflow: auto;
    padding: 20px 0 10px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media all and (min-width: 720px) {
    & {
      position: fixed;
      width: calc(100vw - 126px);
      margin-left: 126px;
      margin-bottom: 0;
      left: 0;
    }
    .region {
      width: 100%;
      height: fit-content;
      margin-bottom: 20px;
    }
    .region p {
      font-size: 20px;
      font-weight: 700;
      padding: 18px 30px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: calc(100vw - 240px);
      margin-left: 240px;
    }
  }
`;

export default Container;
