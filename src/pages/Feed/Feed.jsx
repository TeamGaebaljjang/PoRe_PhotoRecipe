import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import HeaderFeed from '../../components/header/HeaderFeed';
import PostWrapper from '../../components/card/PostWrapper';
import NavBar from '../../components/navBar/NavBar';
import Search from '../Search/Search';
import { Wrap } from '../../components/card/postStyle';
import BtnTop from '../../components/button/BtnTop';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [done, setDone] = useState(false);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [numFeed, setNumFeed] = useState(0);
  const parent = useRef();

  const getFeed = useCallback(async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');
    setLoading(true);
    try {
      const res = await axios.get(`${URL}/post/feed?limit=10&skip=${numFeed}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      setPosts(posts.concat(res.data.posts));
      setLoading(false);
      // console.log(posts);
      console.log(res.data.posts);
      if (res.data.posts.length < 10) {
        setDone(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [numFeed]);

  useEffect(() => {
    if (!done) {
      getFeed();
    }
  }, [getFeed]);

  useEffect(() => {
    if (inView && !loading) {
      setNumFeed((current) => current + 10);
    }
  }, [inView, loading]);

  return (
    <Wrap ref={parent}>
      {posts?.length === 0 ? (
        <Search />
      ) : (
        <>
          <HeaderFeed style={{ position: 'sticky' }} />
          <PostWrapper posts={posts} />
          <div ref={ref} />
        </>
      )}
      <BtnTop parent={parent} />
      <NavBar />
    </Wrap>
  );
};

export default Feed;
