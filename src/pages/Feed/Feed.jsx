import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HeaderFeed from '../../components/header/HeaderFeed';
import PostWrapper from '../../components/card/PostWrapper';
import NavBar from '../../components/navBar/NavBar';

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const URL = 'https://mandarin.api.weniv.co.kr';

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTZjYjUyMTdhZTY2NjU4MWMzMzQ0MyIsImV4cCI6MTY3NjYxODE4MiwiaWF0IjoxNjcxNDM0MTgyfQ.dnnDfwwnekAWwoNEhCQiog5t8TaQ3msfRBRcNbdX3c8';

  const getFeed = async () => {
    try {
      const res = await axios.get(`${URL}/post/feed`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      setPosts(res.data.posts);
      console.log(res);
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getFeed, []);
  return (
    <Wrap>
      <HeaderFeed />
      <PostWrapper posts={posts} />
      <NavBar />
    </Wrap>
  );
};

export default Feed;
