import { Route, Routes } from 'react-router-dom';
import Splash from '../pages/Splash/Splash';
import Login from '../pages/Login/Login';
import Signup from '../pages/Login/SignUp/SignUp';
import SetProfile from '../pages/Login/SetProfile/SetProfile';
import Home from '../pages/Home/Home';
import PhotoZoneDetail from '../pages/PostDetail/PhotoZoneCard/PhotoZoneCard';
import Feed from '../pages/Feed/Feed';
import Search from '../pages/Search/Search';
import OtherUserProfile from '../pages/Profile/YourProfile';
import PostCard from '../pages/PostDetail/PostCard/PostCard';
import Map from '../pages/Map/Map';
import Chat from '../pages/Chat/Chat';
import Profile from '../pages/Profile/Profile';
import Following from '../pages/Profile/Follow/Following';
import Follower from '../pages/Profile/Follow/Follower';
import UploadPhotoZone from '../pages/Profile/UploadPhotoZone/UploadPhotoZone';
import UploadPost from '../pages/Profile/UploadPost/UploadPost';
import NotFound from '../pages/NotFound/NotFound';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/setprofile" element={<SetProfile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/photodetail" element={<PhotoZoneDetail />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/feed/search" element={<Search />} />
      <Route path="/otherProfile" element={<OtherUserProfile />} />
      <Route path="/feed/feeddetail" element={<PostCard />} />
      <Route path="/map" element={<Map />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/following" element={<Following />} />
      <Route path="/profile/follower" element={<Follower />} />
      <Route path="/profile/uploadphotozone" element={<UploadPhotoZone />} />
      <Route path="/profile/uploadpost" element={<UploadPost />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
