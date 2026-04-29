import React, { useEffect, useState } from 'react';
import { LuMoonStar } from 'react-icons/lu';
import { MdSunny } from 'react-icons/md';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-lg bg-gray-800 dark:bg-gray-100 text-yellow-400 dark:text-gray-800 transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm border border-gray-700 dark:border-gray-200"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <MdSunny className="text-xl" />
      ) : (
        <LuMoonStar className="text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;