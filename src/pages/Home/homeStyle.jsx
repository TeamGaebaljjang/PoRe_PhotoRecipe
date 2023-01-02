import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import leftBtn from '../../assets/icons/icon-left-btn.svg';
import rightBtn from '../../assets/icons/icon-right-btn.svg';

const ani = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.9;
  }
`;

export const Wrap = styled.div`
  height: calc(100vh - 55px);
  overflow: auto;
  background-color: ${(props) => props.theme.bgColor};
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) {
    & {
      margin-left: 126px;
      height: 100vh;
    }
  }
  @media all and (min-width: 941px) {
    & {
      margin-left: 240px;
    }
  }
`;

export const Carousel = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Search = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ThumbnailWrap = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 390px;
  height: 380px;
  overflow: hidden;
  border-radius: 0 0 30px 30px;
  &.active {
    animation: ${ani} 4s 1s ease-in-out;
  }
  @media all and (min-width: 720px) {
    & {
      width: 100%;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  position: absolute;
  width: 260px;
  margin: 300px 0 0 40px;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  text-shadow: 1px 1px 2px var(--black);
  @media all and (min-width: 941px) {
    & {
      font-size: 1.4rem;
      width: fit-content;
    }
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const MoveBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 160px;
  opacity: 0.8;
  &.left {
    background: url(${leftBtn}) no-repeat center;
    left: 0;
  }
  &.right {
    background: url(${rightBtn}) no-repeat center;
    right: 0;
  }
`;

export const IconWrap = styled.nav`
  position: absolute;
  bottom: 5px;
  left: 155px;
  @media all and (min-width: 720px) {
    & {
      left: calc(50vw - 110px);
    }
  }
  @media all and (min-width: 941px) {
    & {
      left: calc(50vw - 165px);
    }
  }
`;

export const PageIcon = styled.div`
  display: inline-block;
  margin: 4px;
  width: 8px;
  height: 8px;
  background-color: white;
  box-shadow: 1px 1px 2px var(--black);
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in 0.4s;
  &.icon {
    opacity: 0.4;
  }
  &.icon.active {
    opacity: 0.8;
  }
  @media all and (min-width: 720px) {
    & {
      margin: 5px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: 9px;
      height: 9px;
      margin: 6px;
    }
  }
`;

export const SpotTab = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  gap: 18px;
  padding: 18px 20px;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.shadow};
  overflow: auto;
  white-space: nowrap;
  z-index: 10;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) {
    & {
      padding: 20px 40px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      padding: 20px 60px;
    }
  }
`;

export const SpotBtn = styled.button`
  border: 2px solid var(--super-gray);
  border-radius: 50px;
  padding: 12px 22px;
  line-height: 16px;
  color: var(--super-gray);
  font-size: 1rem;
  background-color: ${(props) => props.theme.bgColor};

  &.active {
    background-color: ${(props) => props.theme.active};
    border-color: var(--black);
    color: white;
  }
`;

export const FeedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 20px;
  @media all and (min-width: 720px) {
    & {
      grid-template-columns: repeat(3, 1fr);
      margin: 30px;
      padding: 0 12px;
      gap: 10px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      padding: 0 34px;
    }
  }
`;

export const Feed = styled.li`
  position: relative;
  min-width: 170px;
  height: 190px;
  border: 1px solid ${(props) => props.theme.postBorder};
  border-radius: 10px;
  overflow: auto;
  @media all and (min-width: 720px) {
    & {
      margin: 0 auto;
      width: 100%;
      height: 240px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      height: 280px;
      /* min-height: fit-content; */
    }
  }
  @media all and (min-width: 1100px) {
    & {
      height: 350px;
    }
  }
`;

export const FeedImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
