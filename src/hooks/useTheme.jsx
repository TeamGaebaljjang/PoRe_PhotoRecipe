import { useCallback, useState } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = useCallback(() => {
    setIsDarkMode((current) => !current);
  }, []);

  return {
    isDarkMode,
    toggleMode,
  };
};

export default useTheme;
