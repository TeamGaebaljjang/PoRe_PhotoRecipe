import { useRef } from 'react';
import { Wrap } from './homeStyle';
import HomeCarousel from './HomeCarousel';
// import HomeSpotBtn from './HomeSpotBtn';
import HomeFeed from './HomeFeed';
import NavBar from '../../components/navBar/NavBar';
import BtnTop from '../../components/button/BtnTop';

const Home = () => {
  const parent = useRef();

  return (
    <Wrap ref={parent}>
      <HomeCarousel />
      <HomeFeed />
      <NavBar />
      <BtnTop parent={parent} />
    </Wrap>
  );
};

export default Home;
