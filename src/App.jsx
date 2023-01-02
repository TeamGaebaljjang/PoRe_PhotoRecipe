import { useContext } from 'react';
import Routes from './routes/Routes';
import { ModeBtnLarge } from './components/button/BtnNight';
import btnDarkLarge from './assets/icons/icon-btn-dark-big.svg';
import btnLightLarge from './assets/icons/icon-btn-light-big.svg';
import { ThemeContext } from './store/ThemeProvider';

const App = () => {
  const { isDarkMode, toggleMode } = useContext(ThemeContext);
  console.log(isDarkMode);
  return (
    <div>
      <Routes />
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
    </div>
  );
};

export default App;
