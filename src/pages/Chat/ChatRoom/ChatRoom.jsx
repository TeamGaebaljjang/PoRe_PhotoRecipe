import {
  Wrap,
  ChatBallon,
  ChatInputWrap,
  ChatTime,
  Chatting,
  ChatWrap,
  SubmitImg,
  InputChat,
} from './chatRoomStyle';
import chatProfile from '../../../assets/img/profile.png';
import HeaderChat from '../../../components/header/HeaderChat';

const ChatRoom = () => {
  return (
    <>
      <HeaderChat />
      <Wrap>
        <ChatWrap>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              안녕하세요<ChatTime>12:39</ChatTime>
            </Chatting>
          </ChatBallon>

          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              <ChatTime>12:40</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon mine>
            <Chatting mine>
              아;;;예;;;
              <ChatTime mine>13:12</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              저는 CSS 대마왕 장 희 수 입니다.<ChatTime>13:13</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              저는 CSS 대마왕 장 희 수 입니다.<ChatTime>13:14</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon mine>
            <Chatting mine>
              알겠습니다;;;;
              <ChatTime mine>14:29</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              저는 CSS 대마왕 장 희 수 입니다.<ChatTime>14:30</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              반가워요 CSS 진짜 쉽네요 ESLint도 정말 편한 것 같아요 여러분들도
              꼭 써보세요<ChatTime>14:39</ChatTime>
            </Chatting>
          </ChatBallon>

          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              반가워요 CSS 진짜 쉽네요 ESLint도 정말 편한 것 같아요 여러분들도
              꼭 써보세요<ChatTime>14:39</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              반가워요 CSS 진짜 쉽네요 ESLint도 정말 편한 것 같아요 여러분들도
              꼭 써보세요<ChatTime>14:39</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              반가워요 CSS 진짜 쉽네요 ESLint도 정말 편한 것 같아요 여러분들도
              꼭 써보세요<ChatTime>14:39</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              반가워요 CSS 진짜 쉽네요 ESLint도 정말 편한 것 같아요 여러분들도
              꼭 써보세요<ChatTime>14:39</ChatTime>
            </Chatting>
          </ChatBallon>
          <ChatBallon>
            <div>
              <img src={chatProfile} alt="" />
            </div>
            <Chatting>
              반가워요 CSS 진짜 쉽네요 ESLint도 정말 편한 것 같아요 여러분들도
              꼭 써보세요<ChatTime>14:39</ChatTime>
            </Chatting>
          </ChatBallon>
        </ChatWrap>
        <ChatInputWrap>
          <input type="file" style={{ display: 'none' }} />
          <SubmitImg htmlFor="photo" />
          <form action="submit" style={{ flexGrow: '1', marginLeft: '15px' }}>
            <input id="photo" type="file" style={{ display: 'none' }} />
            {/* <SubmitImg /> */}
            <InputChat
              style={{ color: 'var(--super-gray)' }}
              type="text"
              placeholder="메시지 입력하기..."
            />
          </form>
          <button type="submit" style={{ color: 'var(--deep-gray)' }}>
            전송
          </button>
        </ChatInputWrap>
      </Wrap>
    </>
  );
};

export default ChatRoom;
