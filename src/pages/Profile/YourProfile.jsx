import axios from 'axios';
import { useEffect, useState } from 'react';
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

const YourProFile = () => {
  const location = useLocation();
  const props = { ...location.state };
  const [info, setInfo] = useState('');
  // const [photo, setPhoto] = useState([]);
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);
  const URL = 'https://mandarin.api.weniv.co.kr';

  const modalHandler = () => {
    setModal(!modal);
  };

  const viewHandler = () => {
    setView(!view);
  };

  useEffect(() => {
    (async function getUserInfo() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${URL}/profile/${props.accountname}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setInfo(response.data.profile);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  // useEffect(() => {
  //   (async function getUserPhoto() {
  //     try {
  //       const token = localStorage.getItem('token');
  //       // const { accountname } = props.accountname;
  //       const response = await axios.get(
  //         `${URL}/product/${props.accountname}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         },
  //       );
  //       console.log(props.accountname);
  //       setPhoto(response.data.product);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    (async function getUserPost() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${URL}/post/${props.accountname}/userpost`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          },
        );
        setPosts(response.data.post);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <HeaderBM modalHandler={modalHandler} />
      <ProfileInfo info={info} />
      <PhotoZoneList accountname={props.accountname} />
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
export default YourProFile;
