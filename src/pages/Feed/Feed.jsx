import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
  const [items, setItems] = useState('');
  const URL = 'https://mandarin.api.weniv.co.kr';

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTZjYjUyMTdhZTY2NjU4MWMzMzQ0MyIsImV4cCI6MTY3NjYxODE4MiwiaWF0IjoxNjcxNDM0MTgyfQ.dnnDfwwnekAWwoNEhCQiog5t8TaQ3msfRBRcNbdX3c8';

  const getFeed = async () => {
    try {
      const res = await axios.get(`${URL}/post/feed/?limit=4`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      setItems(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getFeed, []);

  return (
    <Wrap>
      <HeaderFeed />
      <Post items={items} />
      <Post items={items} />
      <Post items={items} />
      <Post items={items} />
      <NavBar />
    </Wrap>
  );
};

export default Feed;
