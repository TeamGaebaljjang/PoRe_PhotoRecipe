import * as styled from './profileStyle';

import HeaderProfile from '../../components/header/HeaderProfile';
// import HeaderBMProfile from '../../components/header/HeaderBMProfile';

import ProFileInfo from '../../components/proFile/ProFileInfo';
import PhotoZoneList from '../../components/proFile/Photozonelist';
// import FeedBar from '../../components/proFile/Feedbar';
// import Nothing from '../../components/proFile/Nothing';

// import { FeedList, Feed } from './pages/Home/HomeStyle';
// import Feed from '../Home/HomeFeed';

import PhotoZoneModal from '../../components/modal/PhotozoneModal/PhotozoneModal';

import NavBar from '../../components/navBar/NavBar';

const ProFile = () => {
  return (
    <styled.Wrapper>
      {/* <styled.BackDrop /> */}

      <HeaderProfile />
      {/* <HeaderBMProfile /> */}
      <ProFileInfo />
      <PhotoZoneList />

      {/* <FeedBar /> */}
      {/* <Nothing /> */}

      {/* <Feed /> */}

      <PhotoZoneModal />

      <NavBar />
    </styled.Wrapper>
  );
};
export default ProFile;
