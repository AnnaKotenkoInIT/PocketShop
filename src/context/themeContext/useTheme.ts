import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('useTheme must be used inside ThemeProvideer');
  }

  return context;
};
