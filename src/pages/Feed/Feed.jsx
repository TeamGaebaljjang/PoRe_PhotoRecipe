import styled from 'styled-components';
import HeaderFeed from '../../components/header/HeaderFeed';
import Post from '../../components/card/Post';
import NavBar from '../../components/navBar/NavBar';

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Feed = () => {
  return (
    <Wrap>
      <HeaderFeed />
      <Post />
      <Post />
      <Post />
      <Post />
      <NavBar />
    </Wrap>
  );
};

export default Feed;
