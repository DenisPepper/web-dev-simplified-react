import { useEffect, useState } from 'react';

export function ControledInput() {
  const [value, setValue] = useLocalStorage('NAME', '');
  const [value2, setValue2] = useLocalStorage('NAME_2', () => 'default name 2');

  return (
    <>
      <label>
        Name
        <input
          type='text'
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </label>
      <label>
        Name 2
        <input
          type='text'
          value={value2}
          onChange={(evt) => setValue2(evt.target.value)}
        />
      </label>
    </>
  );
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue === null) {
      return isFunc(initialValue) ? initialValue() : initialValue;
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

const isFunc = (obj) => {
  return typeof obj === 'function';
};
