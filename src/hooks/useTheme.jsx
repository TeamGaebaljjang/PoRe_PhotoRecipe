import { useCallback, useLayoutEffect, useState } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = useCallback(() => {
    setIsDarkMode((current) => {
      const updatedMode = !current;
      localStorage.setItem('mode', updatedMode);
      return updatedMode;
    });
  }, []);

  useLayoutEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  return {
    isDarkMode,
    toggleMode,
  };
};

export default useTheme;
