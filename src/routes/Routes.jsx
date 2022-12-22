import { Route, Routes } from 'react-router-dom';
import Chat from '../pages/Chat/Chat';
import Feed from '../pages/Feed/Feed';
import Search from '../pages/Search/Search';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Map from '../pages/Map/Map';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import Splash from '../pages/Splash/Splash';
import Signup from '../pages/Login/SignUp/SignUp';
import SetProfile from '../pages/Login/SetProfile/SetProfile';
import UploadPhotoZone from '../pages/Profile/UploadPhotoZone/UploadPhotoZone';
import Following from '../pages/Profile/Follow/Following';
import Follower from '../pages/Profile/Follow/Follower';
import PostCard from '../pages/PostDetail/PostCard/PostCard';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/setprofile" element={<SetProfile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/feed/search" element={<Search />} />
      <Route path="/feed/feeddetail" element={<PostCard />} />
      <Route path="/map" element={<Map />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/following" element={<Following />} />
      <Route path="/profile/follower" element={<Follower />} />
      <Route path="/profile/uploadphotozone" element={<UploadPhotoZone />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
