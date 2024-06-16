import { createContext } from 'react';
import { Child } from './child';
import { useThemeToggler } from '../custom-hooks/theme-toggler';

export const ThemeContext = createContext();

export function Parent() {
  const [isDark, toggleThemeMode] = useThemeToggler({ isDark: false });

  return (
    <ThemeContext.Provider value={{ isDark, toggleThemeMode }}>
      <Child />
    </ThemeContext.Provider>
  );
}
