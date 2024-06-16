import { useState } from 'react';
import './theme-toggler.css';

export function ThemeToggler() {
  const [isDark, toggleThemeMode] = useThemeToggler({ isDark: false });
  const inputValue = useInputValue('');

  return (
    <div
      className='theme-toggler'
      style={{
        background: isDark ? '#333' : 'white',
        color: isDark ? 'white' : '#333',
      }}
    >
      <label>
        Name:
        <input {...inputValue} />
      </label>
      <button type='button' onClick={toggleThemeMode}>
        Toggle theme
      </button>
    </div>
  );
}

export const useThemeToggler = ({ isDark }) => {
  const [isDarkTheme, setTheme] = useState(isDark);

  const toggle = () => setTheme((isDark) => !isDark);

  return [isDarkTheme, toggle];
};

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (evt) => {
      setValue(evt.target.value);
    },
  };
};
