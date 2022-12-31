import styled from 'styled-components';

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      margin-left: 126px;
      height: 100vh;
    }
    &.no-Navbar {
      margin-left: 0;
    }
  }
`;

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  margin: 25px 20px 40px;
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      margin: 30px 80px 20px;
      padding: 26px;
      border-radius: 20px;
      box-shadow: 0 0 10px var(--gray);
    }
  }
`;

export const User = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const UserProfile = styled.img`
  width: 42px;
  height: 42px;
  background-color: var(--gray);
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 12px;
  cursor: pointer;
  outline: 1px solid var(--light-gray);
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      width: 50px;
      height: 50px;
    }
  }
`;

export const UserInfo = styled.div`
  margin-top: 3px;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 14px;
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      font-size: 18px;
    }
  }
`;

export const UserId = styled.p`
  font-size: 12px;
  color: var(--super-gray);
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      font-size: 13px;
    }
  }
`;

export const More = styled.img`
  position: absolute;
  right: 0;
  width: 22px;
  cursor: pointer;
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      width: 26px;
    }
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  width: 100%;
  /* margin-top: 16px; */
  border-radius: 10px;
  overflow: auto;
  &.no-scroll {
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: var(--gray);
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      height: 450px;
    }
  }
`;

export const PostImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0 5px;
  border-radius: 10px;
  border: 1px solid var(--light-gray);
  cursor: pointer;
  &.detail-post-img {
    height: 350px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px 15px 7px;
`;

export const IconImg = styled.img`
  cursor: pointer;
`;

export const IconCount = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 16px 0 0;
  font-size: 14px;
  color: var(--super-gray);
`;

export const PostTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-top: 14px;
  margin-left: 7px;
`;

export const PostCont = styled.p`
  font-size: 14px;
  margin: 16px 7px;
  cursor: pointer;
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      font-size: 16px;
      margin: 20px 7px;
    }
  }
`;

export const PostDate = styled.p`
  margin: 0 7px;
  font-size: 10px;
  color: var(--super-gray);
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      font-size: 11px;
    }
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: calc(50vw - 195px);
  z-index: 20;
  width: 390px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      position: fixed;
      width: 100vw;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;
