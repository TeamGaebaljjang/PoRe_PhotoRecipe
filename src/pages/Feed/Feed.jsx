import styled from 'styled-components';
import Post from '../../components/card/Post';
import NavBar from '../../components/navBar/NavBar';
import HeaderFeed from '../../components/header/HeaderFeed';

export const Wrap = styled.div`
  height: 100vh;
  overflow: auto;
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
