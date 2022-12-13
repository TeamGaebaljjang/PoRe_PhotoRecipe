import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Carousel = styled.article`
  position: relative;
`;

export const Title = styled.h1`
  position: absolute;
  left: 30px;
  bottom: 40px;
  width: 260px;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
`;

export const Thumbnail = styled.img`
  width: 390px;
  height: 380px;
  object-fit: cover;
  border-radius: 0 0 30px 30px;
`;

export const Search = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const SpotList = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  gap: 20px;
  margin: 22px 0 22px 20px;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Spot = styled.button`
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
  margin: 0 20px;
  overflow: auto;
`;

export const Feed = styled.li`
  width: 170px;
  height: 190px;
  border: 1px solid var(--gray);
  border-radius: 10px;
`;
