import { useContext } from 'react';
import { ThemeContext } from './parent.jsx';

export function Child() {
  const { isDark, toggleThemeMode } = useContext(ThemeContext);

  return (
    <div
      className='theme-toggler'
      style={{
        background: isDark ? '#333' : 'white',
        color: isDark ? 'white' : '#333',
      }}
    >
      <button type='button' onClick={toggleThemeMode}>
        Toggle theme
      </button>
    </div>
  );
}
