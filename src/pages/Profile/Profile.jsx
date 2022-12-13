import MyProFileHeader from '../../components/header/MyProFileHeader';
// import YourProFileHeader from '../../components/header/YourProFileHeader';
import ProFileInfo from '../../components/proFile/ProFileInfo';
// import PhotoZoneList from '../../components/photoZoneList/PhotoZoneList';
// import FeedBar from '../../components/feedBar/FeedBar';
import Nothing from '../../components/errorMessage/Nothing';
import NavBar from '../../components/navBar/NavBar';
// import { FeedList, Feed } from '../Home/HomeStyle';

const ProFile = () => {
  return (
    <div>
      <MyProFileHeader />
      {/* <YourProFileHeader /> */}
      <ProFileInfo />
      {/* <PhotoZoneList /> */}
      {/* <FeedBar /> */}
      <Nothing />
      {/* <FeedList>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </FeedList> */}
      <NavBar />
    </div>
  );
};
export default ProFile;
