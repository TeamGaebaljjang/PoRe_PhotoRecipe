import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
  @media all and (min-width: 720px) {
    & {
      width: 100%;
    }
  }
`;

export const WhoseFeed = styled.p`
  margin-left: 20px;
  font-size: 18px;
  @media all and (min-width: 720px) {
    & {
      margin-left: 48px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      margin-left: 90px;
    }
  }
`;

export const UserIdTitle = styled.span`
  color: var(--black);
  font-size: 20px;
  font-weight: 500;
  @media all and (min-width: 720px) {
    & {
      font-size: 22px;
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  @media all and (min-width: 720px) {
    & {
      gap: 10px;
      margin-right: 20px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      gap: 20px;
      margin-right: 60px;
    }
  }
`;
