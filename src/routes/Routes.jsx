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
import { LoginRoute, NotLoginRoute } from './LoginControl';
import EditPhotoZoneCard from '../pages/PostDetail/EditPhotoZoneCard/EditPhotoZoneCard';

const Routing = () => {
  return (
    <Routes>
      <Route path="/profile/editphotozone" element={<EditPhotoZoneCard />} />
      <Route path="/" element={<Splash />} />
      <Route path="/otherProfile" element={<OtherUserProfile />} />
      <Route
        path="/login"
        element={
          <NotLoginRoute>
            <Login />
          </NotLoginRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <NotLoginRoute>
            <Signup />
          </NotLoginRoute>
        }
      />
      <Route
        path="/signup/setprofile"
        element={
          <NotLoginRoute>
            <SetProfile />
          </NotLoginRoute>
        }
      />
      <Route
        path="/home"
        element={
          <LoginRoute>
            <Home />
          </LoginRoute>
        }
      />
      <Route
        path="/photodetail"
        element={
          <LoginRoute>
            <PhotoZoneDetail />
          </LoginRoute>
        }
      />
      <Route
        path="/feed"
        element={
          <LoginRoute>
            <Feed />
          </LoginRoute>
        }
      />
      <Route
        path="/feed/search"
        element={
          <LoginRoute>
            <Search />
          </LoginRoute>
        }
      />
      <Route
        path="/feed/feeddetail"
        element={
          <LoginRoute>
            <PostCard />
          </LoginRoute>
        }
      />
      <Route
        path="/map"
        element={
          <LoginRoute>
            <Map />
          </LoginRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <LoginRoute>
            <Chat />
          </LoginRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <LoginRoute>
            <Profile />
          </LoginRoute>
        }
      />
      <Route
        path="/profile/following"
        element={
          <LoginRoute>
            <Following />
          </LoginRoute>
        }
      />
      <Route
        path="/profile/follower"
        element={
          <LoginRoute>
            <Follower />
          </LoginRoute>
        }
      />
      <Route
        path="/profile/uploadphotozone"
        element={
          <LoginRoute>
            <UploadPhotoZone />
          </LoginRoute>
        }
      />
      <Route
        path="/profile/uploadpost"
        element={
          <LoginRoute>
            <UploadPost />
          </LoginRoute>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
