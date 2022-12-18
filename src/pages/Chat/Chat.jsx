import { ChatList, ChatName, ChatDate, ChatCont, ChatOn } from './chatStyle';
import profile from '../../assets/img/profile.png';
import HeaderBM from '../../components/header/HeaderBM';
import NavBar from '../../components/navBar/NavBar';

const Chat = () => {
  return (
    <>
      <HeaderBM />
      <ChatList>
        <img src={profile} alt="" />
        <ChatOn />
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
        <img src={profile} alt="" />
        <ChatOn />
        <div>
          <ChatName>조민지</ChatName>
          <ChatCont>나는 디자인대마왕이다 </ChatCont>
        </div>
        <ChatDate>2020.10.26</ChatDate>
      </ChatList>
      <ChatList>
        <img src={profile} alt="" />
        <div>
          <ChatName>배이솔</ChatName>
          <ChatCont>나는 api를 자유자재로 다룰 수 있지 후후</ChatCont>
        </div>
        <ChatDate>2020.10.26</ChatDate>
      </ChatList>
      <NavBar />
    </>
  );
};

export default Chat;
