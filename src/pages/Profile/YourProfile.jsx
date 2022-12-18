import { Wrapper, BackDrop } from './profileStyle';

import HeaderBMProfile from '../../components/header/HeaderBMProfile';

import ProFileInfo from '../../components/proFile/ProFileInfo';
import PhotoZoneList from '../../components/proFile/PhotoZonelist';
import FeedBar from '../../components/proFile/Feedbar';
// import Nothing from '../../components/proFile/Nothing';

// import Feed from '../Home/HomeFeed';
import Post from '../../components/card/Post';

// import PhotoZoneModal from '../../components/modal/PhotozoneModal/PhotozoneModal';

import NavBar from '../../components/navBar/NavBar';

const YourProFile = () => {
  return (
    <Wrapper>
      <BackDrop />

      <HeaderBMProfile />
      <ProFileInfo />
      <PhotoZoneList />

      <FeedBar />
      {/* <Nothing /> */}

      {/* <Feed /> */}
      <Post />
      <Post />
      <Post />

      {/* <PhotoZoneModal /> */}

      <NavBar />
    </Wrapper>
  );
};
export default YourProFile;
