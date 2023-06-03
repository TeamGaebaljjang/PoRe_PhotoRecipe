import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, BackDrop } from './profileStyle';
import HeaderProfile from '../../components/header/HeaderProfile';
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
import { tokenApi } from '../../axiosInstance';

const Profile = () => {
  const [info, setInfo] = useState('');
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const parent = useRef();

  const dispatch = useDispatch();
  const getPost = useSelector((state) => state.feed.feedData);
  const accountname = localStorage.getItem('accountname');
  useEffect(() => {
    dispatch(getFeed(accountname));
  }, []);
  const posts = getPost.payload?.post;

  const { isDarkMode, toggleMode } = useContext(ThemeContext);

  const modalHandler = () => {
    setModal(!modal);
  };
  const viewHandler = () => {
    setView(!view);
  };

  useEffect(() => {
    (async function getMyInfo() {
      try {
        const res = await tokenApi.get(`/user/myinfo`);
        setInfo(res.data.user);
      } catch (error) {
        console.log(error.res);
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
      <HeaderProfile modalHandler={modalHandler} />
      <ProfileInfo info={info} />
      <PhotoZoneList accountname={accountname} />
      <FeedBar viewHandler={viewHandler} accountname={accountname} />
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
export default Profile;
