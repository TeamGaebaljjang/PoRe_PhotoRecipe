import { useContext, useRef } from 'react';
import { Wrap } from './homeStyle';
import HomeCarousel from './HomeCarousel';
// import HomeSpotBtn from './HomeSpotBtn';
import HomeFeed from './HomeFeed';
import NavBar from '../../components/navBar/NavBar';
import BtnTop from '../../components/button/BtnTop';
import { ThemeContext } from '../../store/ThemeProvider';

const Home = () => {
  const parent = useRef();
  const { isDarkMode, toggleMode } = useContext(ThemeContext);
  console.log(isDarkMode);

  return (
    <Wrap ref={parent}>
      <button
        type="button"
        onClick={() => {
          toggleMode();
        }}
        style={{
          width: '30px',
          height: '30px',
          backgroundColor: 'red',
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: '9999',
        }}
      >
        다크모드
      </button>
      <HomeCarousel />
      <HomeFeed />
      <NavBar />
      <BtnTop parent={parent} />
    </Wrap>
  );
};

export default Home;
