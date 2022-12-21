import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 200px;
  padding: 16px 0px 16px;
  width: 390px;
  height: 60px;
  border-top: 1px var(--gray) solid;
  background-color: white;

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
