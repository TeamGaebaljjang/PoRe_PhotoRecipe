import axios from 'axios';
import { useEffect, useState } from 'react';
import { Wrapper } from './profileStyle';
import HeaderProfile from '../../components/header/HeaderProfile';
import ProfileInfo from '../../components/profile/ProfileInfo';
// import PhotoZoneList from '../../components/profile/PhotoZoneList';
import FeedBar from '../../components/profile/Feedbar';
import Nothing from '../../components/profile/Nothing';
// import Feed from '../Home/HomeFeed';
// import PhotoZoneModal from '../../components/modal/PhotoZoneModal/PhotoZoneModal';
import NavBar from '../../components/navBar/NavBar';
import PostWrapper from '../../components/card/PostWrapper';

const Profile = () => {
  const [info, setInfo] = useState('');
  const [posts, setPosts] = useState([]);
  const URL = 'https://mandarin.api.weniv.co.kr';

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
      {/* <BackDrop /> */}
      <HeaderProfile />
      <ProfileInfo info={info} />
      {/* <PhotoZoneList /> */}
      <FeedBar />
      {posts.length === 0 ? <Nothing /> : <PostWrapper posts={posts} />}
      {/* <PhotoZoneModal /> */}
      <NavBar />
    </Wrapper>
  );
};
export default Profile;
