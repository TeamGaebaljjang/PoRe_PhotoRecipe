import { useCallback, useLayoutEffect, useState } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = useCallback(() => {
    setIsDarkMode((current) => !current);
    localStorage.setItem('mode', isDarkMode);
  }, [isDarkMode]);

  useLayoutEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setIsDarkMode(savedMode);
    }
  }, []);

  return {
    isDarkMode,
    toggleMode,
  };
};

export default useTheme;
