import styled from 'styled-components';

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 658px;
`;

export const SearchMsg = styled.p`
  font-size: 14px;
  color: var(--super-gray);
`;

export const User = styled.div`
  display: flex;
  margin: 20px;
`;

export const UserProfile = styled.img`
  background-color: var(--gray);
  border-radius: 50%;
  margin-right: 12px;
`;

export const UserInfo = styled.div`
  margin-top: 3px;
`;

export const UserName = styled.p`
  font-size: 14px;
`;

export const UserId = styled.p`
  font-size: 12px;
  color: var(--super-gray);
`;
