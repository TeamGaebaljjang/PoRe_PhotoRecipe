import { useContext, useRef } from 'react';
import { Wrap } from './homeStyle';
import HomeCarousel from './HomeCarousel';
// import HomeSpotBtn from './HomeSpotBtn';
import HomeFeed from './HomeFeed';
import NavBar from '../../components/navBar/NavBar';
import BtnTop from '../../components/button/BtnTop';
import { ThemeContext } from '../../store/ThemeProvider';
import { ModeBtn, ModeBtnLarge } from '../../components/button/BtnNight';
import btnDark from '../../assets/icons/icon-btn-dark.svg';
import btnLight from '../../assets/icons/icon-btn-light.svg';
import btnDarkLarge from '../../assets/icons/icon-btn-dark-big.svg';
import btnLightLarge from '../../assets/icons/icon-btn-light-big.svg';

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
      <ModeBtnLarge
        type="button"
        onClick={() => {
          toggleMode();
        }}
        style={
          isDarkMode
            ? { backgroundImage: `url(${btnDarkLarge})` }
            : { backgroundImage: `url(${btnLightLarge})` }
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
