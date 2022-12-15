import styled from 'styled-components';

export const Wrap = styled.div`
  height: 100vh;
  overflow: auto;
`;

export const Carousel = styled.article`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;

export const Title = styled.h1`
  position: absolute;
  width: 260px;
  margin: 0 0 30px 30px;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
`;

export const Search = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Thumbnail = styled.img`
  width: 390px;
  height: 380px;
  object-fit: cover;
  border-radius: 0 0 30px 30px;
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
  padding-bottom: 60px;
  overflow: auto;
`;

export const Feed = styled.li`
  width: 170px;
  height: 190px;
  border: 1px solid var(--gray);
  border-radius: 10px;
`;
