import { ChatList, ChatName, ChatDate, ChatCont, ChatOn } from './chatStyle';
import chatProfile from '../../assets/img/chatProfile.png';
import chatOn from '../../assets/img/chatOn.png';

const Chat = () => {
  return (
    <>
      <ChatList>
        <img src={chatProfile} alt="" />
        <ChatOn>
          <img src={chatOn} alt="" />
        </ChatOn>
        <div>
          <ChatName>장희수</ChatName>
          <ChatCont>
            반가워요 CSS 진짜 쉽네요 ESLint도 정말 편한 것 같아요 여러분들도 꼭
            써보세요
          </ChatCont>
        </div>
        <ChatDate>2020.10.26</ChatDate>
      </ChatList>
      <ChatList>
        <img src={chatProfile} alt="" />{' '}
        <ChatOn>
          <img src={chatOn} alt="" />
        </ChatOn>
        <div>
          <ChatName>조민지</ChatName>
          <ChatCont>나는 디자인대마왕이다 </ChatCont>
        </div>
        <ChatDate>2020.10.26</ChatDate>
      </ChatList>
      <ChatList>
        <img src={chatProfile} alt="" />
        <div>
          <ChatName>배이솔</ChatName>
          <ChatCont>나는 api를 자유자재로 다룰 수 있지 후후</ChatCont>
        </div>
        <ChatDate>2020.10.26</ChatDate>
      </ChatList>
    </>
  );
};

export default Chat;
