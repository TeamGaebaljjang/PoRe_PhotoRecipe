import styled from 'styled-components';
import MyProFileHeader from '../../components/header/MyProFileHeader';
// import YourProFileHeader from '../../components/header/YourProFileHeader';
import ProFileInfo from '../../components/proFile/ProFileInfo';
import PhotoZoneList from '../../components/photoZoneList/PhotoZoneList';
import FeedBar from '../../components/feedBar/FeedBar';
// import Nothing from '../../components/errorMessage/Nothing';
import NavBar from '../../components/navBar/NavBar';
// import { FeedList, Feed } from './pages/Home/HomeStyle';
import Post from '../../components/card/Post';

const FeedContainer = styled.div`
  height: 398px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ProFile = () => {
  return (
    <div>
      <MyProFileHeader />
      {/* <YourProFileHeader /> */}
      <ProFileInfo />
      <PhotoZoneList />
      <FeedBar />
      {/* <Nothing /> */}

      <FeedContainer>
        <Post />
        <Post />
        {/* <FeedList>
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </FeedList> */}
      </FeedContainer>
      <NavBar />
    </div>
  );
};
export default ProFile;
