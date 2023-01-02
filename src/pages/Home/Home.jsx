import { useContext, useRef } from 'react';
import { Wrap } from './homeStyle';
import HomeCarousel from './HomeCarousel';
// import HomeSpotBtn from './HomeSpotBtn';
import HomeFeed from './HomeFeed';
import NavBar from '../../components/navBar/NavBar';
import BtnTop from '../../components/button/BtnTop';
import { ThemeContext } from '../../store/ThemeProvider';
import { ModeBtn } from '../../components/button/BtnNight';
import btnDark from '../../assets/icons/icon-btn-dark.svg';
import btnLight from '../../assets/icons/icon-btn-light.svg';

const Home = () => {
  const parent = useRef();
  const { isDarkMode, toggleMode } = useContext(ThemeContext);
  console.log(isDarkMode);

  return (
    <Wrap ref={parent}>
      <ModeBtn
        type="button"
        onClick={() => {
          toggleMode();
        }}
        style={
          isDarkMode
            ? { backgroundImage: `url(${btnDark})` }
            : { backgroundImage: `url(${btnLight})` }
        }
      />

      <HomeCarousel />
      <HomeFeed />
      <NavBar />
      <BtnTop parent={parent} />
    </Wrap>
  );
};

export default Home;
