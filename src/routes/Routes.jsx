import { Route, Routes } from 'react-router-dom';
import Chat from '../pages/Chat/Chat';
import Feed from '../pages/Feed/Feed';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Map from '../pages/Map/Map';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import Splash from '../pages/Splash/Splash';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/map" element={<Map />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
