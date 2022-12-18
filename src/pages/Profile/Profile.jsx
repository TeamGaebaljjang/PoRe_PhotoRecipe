import { Wrapper, BackDrop } from './profileStyle';

import HeaderProfile from '../../components/header/HeaderProfile';

import ProfileInfo from '../../components/profile/ProfileInfo';
import PhotoZoneList from '../../components/profile/PhotoZoneList';
// import FeedBar from '../../components/proFile/Feedbar';
// import Nothing from '../../components/proFile/Nothing';

// import Feed from '../Home/HomeFeed';

import PhotoZoneModal from '../../components/modal/PhotoZoneModal/PhotoZoneModal';

import NavBar from '../../components/navBar/NavBar';

const Profile = () => {
  return (
    <Wrapper>
      <BackDrop />

      <HeaderProfile />
      <ProfileInfo />
      <PhotoZoneList />

      {/* <FeedBar /> */}
      {/* <Nothing /> */}

      {/* <Feed /> */}

      <PhotoZoneModal />

      <NavBar />
    </Wrapper>
  );
};
export default Profile;
