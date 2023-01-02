import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import { lightMode, darkMode } from '../styles/theme';

export const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleMode: null,
});

const ThemeProvider = ({ children }) => {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider theme={themeProps.isDarkMode ? darkMode : lightMode}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
