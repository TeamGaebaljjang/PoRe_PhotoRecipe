import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes/Routes';
import { darkMode, lightMode } from './theme/theme';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode((current) => !current);
  };

  return (
    <div>
      <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
        <Routes />
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
            top: '0',
          }}
        >
          다크모드
        </button>
      </ThemeProvider>
    </div>
  );
};

export default App;
