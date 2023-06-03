import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback, useRef, useContext } from 'react';
import HeaderFeed from '../../components/header/HeaderFeed';
import PostWrapper from '../../components/card/PostWrapper';
import NavBar from '../../components/navBar/NavBar';
import Search from '../Search/Search';
import { Wrap, FeedWrap } from '../../components/card/postStyle';
import BtnTop from '../../components/button/BtnTop';
import { ThemeContext } from '../../store/ThemeProvider';
import { ModeBtn } from '../../components/button/BtnNight';
import btnDark from '../../assets/icons/icon-btn-dark.svg';
import btnLight from '../../assets/icons/icon-btn-light.svg';
import { api } from '../../axiosInstance';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [done, setDone] = useState(false);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const [numFeed, setNumFeed] = useState(0);
  const parent = useRef();
  const { isDarkMode, toggleMode } = useContext(ThemeContext);

  const getFeed = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get(`/post/feed?limit=10&skip=${numFeed}`);
      setPosts(posts.concat(res.data.posts));
      setLoading(false);
      if (res.data.posts.length < 10) {
        setDone(true);
      }
    } catch (error) {
      console.log(error.res);
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
      <ModeBtn
        type="button"
        onClick={() => {
          toggleMode();
        }}
        style={
          isDarkMode
            ? { backgroundImage: `url(${btnDark})` }
            : { backgroundImage: `url(${btnLight})` }
        }
      />
      {posts?.length === 0 ? (
        <Search />
      ) : (
        <>
          <FeedWrap>
            <HeaderFeed className="header" style={{ position: 'sticky' }} />
            <PostWrapper posts={posts} />
          </FeedWrap>
          <div ref={ref} style={{ marginBottom: '10px' }} />
        </>
      )}
      <BtnTop parent={parent} />
      <NavBar />
    </Wrap>
  );
};

export default Feed;
