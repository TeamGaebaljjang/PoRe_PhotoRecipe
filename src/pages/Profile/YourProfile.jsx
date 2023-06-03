import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper, BackDrop } from './profileStyle';
import HeaderBM from '../../components/header/HeaderBM';
import ProfileInfo from '../../components/profile/ProfileInfo';
import PhotoZoneList from '../../components/profile/PhotoZoneList';
import FeedBar from '../../components/profile/Feedbar';
import Nothing from '../../components/profile/Nothing';
import NavBar from '../../components/navBar/NavBar';
import PostWrapper from '../../components/card/PostWrapper';
import ProfileUnderModal from '../../components/modal/UnderModal/ProfileUnderModal';
import { getFeed } from '../../store/feedSlice';
import BtnTop from '../../components/button/BtnTop';
import { ThemeContext } from '../../store/ThemeProvider';
import { ModeBtn } from '../../components/button/BtnNight';
import btnDark from '../../assets/icons/icon-btn-dark.svg';
import btnLight from '../../assets/icons/icon-btn-light.svg';
import { api, tokenApi } from '../../axiosInstance';

const YourProFile = () => {
  const location = useLocation();
  const userInfo = { ...location.state };
  const [info, setInfo] = useState('');
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const parent = useRef();
  const { isDarkMode, toggleMode } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const getPost = useSelector((state) => state.feed.feedData);
  useEffect(() => {
    dispatch(getFeed(userInfo.accountname));
  }, []);
  const posts = getPost.payload?.post;

  const modalHandler = () => {
    setModal(!modal);
  };

  const viewHandler = () => {
    setView(!view);
  };

  const [isfollow, setIsFollow] = useState(info.isfollow);
  // 팔로우
  const follow = async () => {
    try {
      const res = await api.post(`/profile/${info.accountname}/follow`, []);
      setIsFollow(res.data.profile.isfollow);
    } catch (error) {
      console.log(error.res);
    }
  };

  // 언팔로우
  const unFollow = async () => {
    try {
      const res = await api.delete(`/profile/${info.accountname}/unfollow`);
      setIsFollow(res.data.profile.isfollow);
    } catch (error) {
      console.log(error.res);
    }
  };

  useEffect(() => {
    (async function getUserInfo() {
      try {
        const response = await tokenApi.get(`/profile/${userInfo.accountname}`);
        setInfo(response.data.profile);
        setIsFollow(response.data.profile.isfollow);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  return (
    <Wrapper ref={parent}>
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
      <HeaderBM modalHandler={modalHandler} />
      <ProfileInfo
        info={info}
        isfollow={isfollow}
        follow={follow}
        unFollow={unFollow}
      />
      <PhotoZoneList accountname={userInfo.accountname} />
      <FeedBar viewHandler={viewHandler} accountname={userInfo.accountname} />
      {posts?.length === 0 ? (
        <Nothing />
      ) : (
        <PostWrapper posts={posts} view={view} />
      )}
      {modal ? (
        <BackDrop
          onClick={() => {
            setModal(!modal);
          }}
        />
      ) : null}
      {modal ? <ProfileUnderModal modalHandler={modalHandler} /> : null}
      <BtnTop parent={parent} />
      <NavBar />
    </Wrapper>
  );
};
export default YourProFile;
