import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';

import Test1 from './pages/Home/Home';
import Test2 from './pages/Profile/UploadPhotoZone/UploadPhotoZone';
import Test3 from './pages/Profile/Follow/Follower';
import Chat from './pages/Chat/Chat';
import Test4 from './components/proFile/ProFile';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Test1 />} />
        <Route path="/feed" element={<Test2 />} />
        <Route path="/map" element={<Test3 />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Test4 />} />
      </Routes>
    </div>
  );
};
export default App;
