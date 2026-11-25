import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <span className={`theme-toggle ${className}`}>
      <DarkModeSwitch
        checked={isDark}
        onChange={toggleTheme}
        size={22}
        sunColor="#0c1512"
        moonColor="#15e0b5"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      />
    </span>
  );
}
