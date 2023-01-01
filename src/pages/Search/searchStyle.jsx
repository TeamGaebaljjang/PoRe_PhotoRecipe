import styled from 'styled-components';

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) {
    & {
      height: 100vh;
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

export const SearchCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 108px);
`;

export const SearchMsg = styled.p`
  font-size: 14px;
  color: var(--super-gray);
`;

export const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 350px;
  height: 70px;
  margin: 0 auto;
  border-bottom: 0.5px solid var(--light-gray);
  @media all and (min-width: 720px) {
    & {
      width: 100%;
    }
  }
`;

export const User = styled.div`
  display: flex;
  margin: 20px;
  cursor: pointer;
`;

export const UserProfile = styled.img`
  width: 50px;
  height: 50px;
  background-color: var(--gray);
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  margin-top: 6px;
`;

export const UserName = styled.p`
  font-size: 14px;
`;

export const UserId = styled.p`
  font-size: 12px;
  color: var(--super-gray);
`;

export const HighlightWrap = styled.span``;

export const Highlighting = styled.span`
  color: var(--success-green);
  font-weight: bold;
`;
