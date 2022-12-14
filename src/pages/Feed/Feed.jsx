import styled from 'styled-components';
import Post from '../../components/card/Post';
import NavBar from '../../components/navBar/NavBar';
import FeedHeader from '../../components/header/FeedHeader';

export const Wrap = styled.div`
  height: 100vh;
  overflow: auto;
`;

const Feed = () => {
  return (
    <Wrap>
      <FeedHeader />
      <Post />
      <Post />
      <Post />
      <Post />
      <NavBar />
    </Wrap>
  );
};

export default Feed;
