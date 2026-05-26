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
          /* Light Mode: Displays a Support Agent Icon representing CS/CX */
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
            {/* Headset Band across the upper head */}
            <path d="M3 11a9 9 0 0 1 18 0"></path>
            {/* Left Ear Cup */}
            <rect x="2" y="11" width="2" height="4" rx="1"></rect>
            {/* Right Ear Cup */}
            <rect x="20" y="11" width="2" height="4" rx="1"></rect>
            {/* Microphone Boom Arm */}
            <path d="M21 15a4 4 0 0 1-4 4h-3"></path>
            {/* Microphone Tip */}
            <circle cx="13" cy="19" r="1" fill="currentColor"></circle>
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
