import styled from 'styled-components';

export const ChatList = styled.div`
  margin: 0 10px;
  position: relative;
  height: 70px;
  border-bottom: 0.5px solid var(--light-gray);
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ChatDate = styled.p`
  position: absolute;
  right: 10px;
  margin-top: 40px;
  font-size: 10px;
  color: var(--gray);
`;
export const ChatName = styled.strong`
  font-size: 14px;
`;
export const ChatCont = styled.p`
  width: 250px;
  font-size: 12px;
  color: var(--super-gray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ChatOn = styled.div`
  position: absolute;
  top: 15px;
`;
