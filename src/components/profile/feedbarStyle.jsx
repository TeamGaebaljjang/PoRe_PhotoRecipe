import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 200px;
  padding: 16px 0;
  width: 390px;
  height: 60px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 0 4px 7px -4px var(--light-gray);
  position: sticky;
  align-self: flex-start;
  top: -1px;
  z-index: 10;

  button {
    margin-right: 16px;
  }
`;

export const WhoseFeed = styled.p`
  margin-left: 30px;
  font-size: 22px;
  font-weight: 500;
`;
