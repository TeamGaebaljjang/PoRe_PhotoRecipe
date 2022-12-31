import styled from 'styled-components';
import chatOn from '../../assets/img/chatOn.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 60px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      margin-left: 126px;
      /* padding: 0 15px; */
    }
  }
`;

export const ChatList = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  margin: 0 10px;
  position: relative;
  border-bottom: 0.5px solid var(--light-gray);
  gap: 10px;
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      margin: 0 30px;
    }
  }
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
  background-image: url(${chatOn});
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  top: 15px;
`;
