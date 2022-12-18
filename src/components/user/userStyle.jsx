import styled from 'styled-components';

export const UserLi = styled.li`
  margin: 0 10px;
  position: relative;
  height: 70px;
  border-bottom: 0.5px solid var(--light-gray);
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const UserName = styled.strong`
  display: inline-block;
  font-size: 14px;
`;
export const UserCont = styled.p`
  width: 250px;
  font-size: 12px;
  color: var(--super-gray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
