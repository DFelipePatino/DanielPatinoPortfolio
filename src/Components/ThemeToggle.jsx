import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="theme-toggle-icon">
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="theme-toggle-icon"
          >
            {/* Laptop Screen */}
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            {/* Keyboard/Base Line */}
            <line x1="2" y1="20" x2="22" y2="20"></line>
            {/* Base Opening Notch */}
            <path d="M12 20v-3"></path>
          </svg>
        ) : (
          /* Light Mode: Displays a Success and Growth Icon representing upward movement and data. */
          /* Light Mode: Displays a rising chart arrow reaching a star, symbolizing upward growth and success. */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="theme-toggle-icon"
          >
            {/* Horizontal Axis (X-axis) */}
            <path d="M3 21h18"></path>
            {/* Vertical Axis (Y-axis) */}
            <path d="M3 21v-18"></path>
            {/* The rising, jagged path/chart line */}
            <path d="M3 17l6-6 4 4 8-8"></path>
            {/* The arrow tip indicating continued growth */}
            <path d="M17 7h4v4"></path>
            {/* The star at the peak, representing the goal or success */}
            {/* <path d="M21 16a2 2 0 1 1-2 2h-1a2 2 0 1 1-2-2"></path> */}
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
