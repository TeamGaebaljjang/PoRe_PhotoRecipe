import styled from 'styled-components';

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const UserProfile = styled.img`
  float: left;
  background-color: var(--gray);
  border-radius: 50%;
  margin-right: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
`;

export const UserName = styled.p`
  font-size: 14px;
`;

export const UserId = styled.p`
  font-size: 12px;
  color: var(--super-gray);
`;

export const PostImg = styled.img`
  width: 350px;
  height: 228px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0 14px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const IconImg = styled.img`
  cursor: pointer;
`;

export const IconCount = styled.p`
  margin: 0 16px 0 6px;
  font-size: 12px;
  color: var(--super-gray);
`;

export const PostCont = styled.p`
  font-size: 14px;
  margin: 16px 0;
`;

export const PostDate = styled.p`
  font-size: 10px;
  color: var(--super-gray);
`;
