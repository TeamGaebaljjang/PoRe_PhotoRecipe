import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 390px;
  height: calc(100vh - (100vh / 2.6));
  background-color: white;
  padding-bottom: 60px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0 0 10px var(--deep-gray);
  overflow: hidden;

  .region {
    width: 390px;
    height: 50px;
    margin-bottom: 10px;
    border-bottom: 1px var(--light-gray) solid;
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
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Container;
