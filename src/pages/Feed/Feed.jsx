import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import HeaderFeed from '../../components/header/HeaderFeed';
import PostWrapper from '../../components/card/PostWrapper';
import NavBar from '../../components/navBar/NavBar';
import Search from '../Search/Search';
import { Wrap } from '../../components/card/postStyle';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [numFeed, setNumFeed] = useState(10);

  const getFeed = useCallback(async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');
    setLoading(true);
    try {
      const res = await axios.get(`${URL}/post/feed?limit=${numFeed}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      setPosts(res.data.posts);
      // console.log('feed 응답 : ', res);
      // console.log('feed 데이터 : ', res.data.posts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [numFeed]);

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  useEffect(() => {
    if (inView && !loading) {
      setNumFeed((current) => current + 5);
    }
  }, [inView, loading]);

  return (
    <Wrap>
      {posts?.length === 0 ? (
        <Search />
      ) : (
        <>
          <HeaderFeed />
          <PostWrapper posts={posts} />
          <div ref={ref} style={{ color: 'transparent' }}>
            더보기
          </div>
        </>
      )}
      <NavBar />
    </Wrap>
  );
};

export default Feed;
