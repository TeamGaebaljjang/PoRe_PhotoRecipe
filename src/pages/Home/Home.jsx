import { Wrap } from './homeStyle';
import HomeCarousel from './HomeCarousel';
// import HomeSpotBtn from './HomeSpotBtn';
import HomeFeed from './HomeFeed';
import NavBar from '../../components/navBar/NavBar';

const Home = () => {
  return (
    <Wrap>
      <HomeCarousel />
      {/* <HomeSpotBtn /> */}
      <HomeFeed />
      <NavBar />
    </Wrap>
  );
};

export default Home;
