import {
  ChatBallon,
  ChatInputWrap,
  ChatTime,
  Chatting,
  ChatWrap,
  BtnPhoto,
} from './chatRoomStyle';
import chatProfile from '../../../assets/img/profile.png';

const ChatRoom = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: 'var(--gray)' }}>
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
            <ChatTime>12:39</ChatTime>
          </Chatting>
        </ChatBallon>
        <ChatBallon>
          <div>
            <img src={chatProfile} alt="" />
          </div>
          <Chatting>
            저는 CSS 대마왕 장 희 수 입니다.<ChatTime>12:39</ChatTime>
          </Chatting>
        </ChatBallon>
        <ChatBallon>
          <div>
            <img src={chatProfile} alt="" />
          </div>
          <Chatting>
            저는 CSS 대마왕 장 희 수 입니다.<ChatTime>12:39</ChatTime>
          </Chatting>
        </ChatBallon>
        <ChatBallon>
          <div>
            <img src={chatProfile} alt="" />
          </div>
          <Chatting>
            저는 CSS 대마왕 장 희 수 입니다.<ChatTime>12:39</ChatTime>
          </Chatting>
        </ChatBallon>
        <ChatBallon>
          <div>
            <img src={chatProfile} alt="" />
          </div>
          <Chatting>
            저는 CSS 대마왕 장 희 수 입니다.<ChatTime>12:39</ChatTime>
          </Chatting>
        </ChatBallon>
        <ChatBallon mine>
          <Chatting mine>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus neque quae sit dolorem, molestias asperiores beatae
            laborum ullam dignissimos quos corrupti omnis, sed dicta sapiente
            placeat aperiam totam cum veritatis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque possimus aliquid officia ex
            repudiandae velit architecto, facilis temporibus ea dolorem id aut
            maxime voluptas nihil ratione voluptatum impedit magnam commodi?
            <ChatTime mine>12:39</ChatTime>
          </Chatting>
        </ChatBallon>
      </ChatWrap>
      <ChatInputWrap>
        <BtnPhoto />
        <form>
          <input
            style={{ width: '270px', color: 'var(--super-gray)' }}
            type="text"
            placeholder="메시지 입력하기..."
          />
        </form>
        <button type="submit" style={{ color: 'var(--deep-gray)' }}>
          전송
        </button>
      </ChatInputWrap>
    </div>
  );
};

export default ChatRoom;
