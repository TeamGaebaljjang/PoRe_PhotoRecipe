import { useContext, useRef } from 'react';
import { Wrap } from './homeStyle';
import HomeCarousel from './HomeCarousel';
// import HomeSpotBtn from './HomeSpotBtn';
import HomeFeed from './HomeFeed';
import NavBar from '../../components/navBar/NavBar';
import BtnTop from '../../components/button/BtnTop';
import { ThemeContext } from '../../store/ThemeProvider';
import BtnNight from '../../components/button/BtnNight';

const Home = () => {
  const parent = useRef();
  const { isDarkMode, toggleMode } = useContext(ThemeContext);
  console.log(isDarkMode);

  return (
    <Wrap ref={parent}>
      <BtnNight
        type="button"
        onClick={() => {
          toggleMode();
        }}
      >
        다크모드
      </BtnNight>
      <HomeCarousel />
      <HomeFeed />
      <NavBar />
      <BtnTop parent={parent} />
    </Wrap>
  );
};

export default Home;
