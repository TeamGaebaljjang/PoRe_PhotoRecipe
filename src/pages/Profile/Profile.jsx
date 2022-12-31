import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
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

const Profile = () => {
  const [info, setInfo] = useState('');
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const URL = 'https://mandarin.api.weniv.co.kr';
  const parent = useRef();

  const dispatch = useDispatch();
  const getPost = useSelector((state) => state.feed.feedData);
  const accountname = localStorage.getItem('accountname');
  useEffect(() => {
    dispatch(getFeed(accountname));
  }, []);
  const posts = getPost.payload?.post;

  const modalHandler = () => {
    setModal(!modal);
  };
  const viewHandler = () => {
    setView(!view);
  };

  useEffect(() => {
    (async function getMyInfo() {
      try {
        const authToken = localStorage.getItem('token');
        const res = await axios.get(`${URL}/user/myinfo`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setInfo(res.data.user);
      } catch (error) {
        console.log('error입니다.');
      }
    })();
  }, []);

  return (
    <Wrapper ref={parent}>
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
