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

  const getFeed = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');

    try {
      const res = await axios.get(`${URL}/post/feed`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      setPosts(res.data.posts);
      // console.log('feed 응답 : ', res);
      // console.log('feed 데이터 : ', res.data.posts);
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
