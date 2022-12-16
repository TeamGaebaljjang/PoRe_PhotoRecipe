import styled from 'styled-components';

export const UserComment = styled.li`
  margin: 0 20px;
  padding: 10px 0;
  position: relative;
  border-bottom: 0.5px solid var(--light-gray);
  display: flex;
  gap: 10px;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const UserName = styled.strong`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const AddTime = styled.p`
  font-size: 10px;
  color: var(--gray);
  margin-left: 5px;
`;

export const CommentCont = styled.p`
  width: 280px;
  font-size: 12px;
  color: var(--super-gray);
  white-space: auto;

  word-break: break-all;
`;

export const CommentMoreBtn = styled.img`
  position: absolute;
  right: 0;
  top: 10px;
`;
