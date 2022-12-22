import axios from 'axios';
import { useEffect, useState } from 'react';
import { Wrapper, BackDrop } from './profileStyle';
import HeaderProfile from '../../components/header/HeaderProfile';
import ProfileInfo from '../../components/profile/ProfileInfo';
import PhotoZoneList from '../../components/profile/PhotoZoneList';
import FeedBar from '../../components/profile/Feedbar';
import Nothing from '../../components/profile/Nothing';
import NavBar from '../../components/navBar/NavBar';
import PostWrapper from '../../components/card/PostWrapper';
import ProfileUnderModal from '../../components/modal/UnderModal/ProfileUnderModal';

const Profile = () => {
  const [info, setInfo] = useState('');
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const URL = 'https://mandarin.api.weniv.co.kr';
  const [view, setView] = useState(false);
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

  useEffect(() => {
    (async function getMyPost() {
      try {
        const authToken = localStorage.getItem('token');
        const accountName = localStorage.getItem('accountname');
        const res = await axios.get(`${URL}/post/${accountName}/userpost`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        });
        setPosts(res.data.post);
      } catch (error) {
        console.log('error입니다.');
      }
    })();
  }, []);
  return (
    <Wrapper>
      <HeaderProfile modalHandler={modalHandler} />
      <ProfileInfo info={info} />
      <PhotoZoneList />
      <FeedBar viewHandler={viewHandler} />
      {posts.length === 0 ? (
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
      <NavBar />
    </Wrapper>
  );
};
export default Profile;
