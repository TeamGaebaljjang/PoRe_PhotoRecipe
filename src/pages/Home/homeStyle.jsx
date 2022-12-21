import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import leftBtn from '../../assets/icons/icon-left-btn.svg';
import rightBtn from '../../assets/icons/icon-right-btn.svg';

export const Move = keyframes`
  0% {
    transform: translateX(0px);
  }
  25%{
    transform: translateX(-100%);
  }
  50%{
    transform: translateX(-200%);
  }
  75%{
    transform: translateX(-300%);
  }
  100%{
    transform: translateX(0px);
  }
`;

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Carousel = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  /* &::-webkit-scrollbar {
    display: none;
  } */
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
  animation: ${Move} 10s ease-in-out infinite;
`;

export const Title = styled.h1`
  position: absolute;
  width: 260px;
  margin: 290px 0 0 30px;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export const SpotTab = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  gap: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 7px -4px var(--gray);
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SpotBtn = styled.button`
  border: 2px solid var(--super-gray);
  border-radius: 50px;
  padding: 12px 26px;
  line-height: 16px;
  color: var(--super-gray);
  font-size: 1rem;

  &.active {
    background-color: var(--black);
    border-color: var(--black);
    color: white;
  }
`;

export const FeedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 20px;
  overflow: auto;
`;

export const Feed = styled.li`
  width: 170px;
  height: 190px;
  border: 1px solid var(--gray);
  border-radius: 10px;
`;
