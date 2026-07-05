import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the EXACT same context object

export default function ThemeToggleButton() {
  // ==========================================
  // STEP 3: CONSUME THE CONTEXT
  // ==========================================
  
  // We pass our ThemeContext object directly into the useContext hook.
  // This hook returns the exact object we provided in the `value` prop in App.jsx.
  // We use object destructuring to pull out the `theme` string and `toggleTheme` function.
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      style={{ 
        padding: '10px 20px', 
        fontSize: '16px',
        cursor: 'pointer',
        border: '2px solid',
        borderColor: theme === 'light' ? '#000' : '#fff',
        background: 'transparent',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}