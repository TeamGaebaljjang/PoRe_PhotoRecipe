import { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderFeed from '../../components/header/HeaderFeed';
import PostWrapper from '../../components/card/PostWrapper';
import NavBar from '../../components/navBar/NavBar';
import Search from '../Search/Search';
import { Wrap } from '../../components/card/postStyle';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const getFeed = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');

    try {
      const res = await axios.get(`${URL}/post/feed?limit=30`, {
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
      {posts?.length === 0 ? (
        <Search />
      ) : (
        <>
          <HeaderFeed />
          <PostWrapper posts={posts} />
        </>
      )}
      <NavBar />
    </Wrap>
  );
};

export default Feed;
