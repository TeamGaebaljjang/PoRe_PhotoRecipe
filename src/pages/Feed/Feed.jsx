// import FeedSearch from './FeedSearch';
import styled from 'styled-components';
import search from '../../assets/icons/icon-search.svg';
import Post from '../../components/card/Post';

const Wrap = styled.div`
  height: 100vh;
  overflow: auto;
`;

const TopBar = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid var(--light-gray);
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600px;
  margin-left: 20px;
`;

const Search = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
`;

const Feed = () => {
  return (
    <Wrap>
      <TopBar>
        <Title>포레 피드</Title>
        <Search type="button">
          <img src={search} alt="검색" />
        </Search>
      </TopBar>
      <Post />
      <Post />
      <Post />
      <Post />
    </Wrap>
  );
};

export default Feed;
