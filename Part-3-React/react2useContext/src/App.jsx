import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the context we created
import ThemeToggleButton from './ThemeToggleButton'; // Import our child component

export default function App() {
  // We define the state that we want to share globally
  const [theme, setTheme] = useState('light');

  // We also define a function to update that state, which we will also share
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // ==========================================
  // STEP 2: PROVIDE THE CONTEXT
  // ==========================================
  return (
    // The Provider component wraps around the parts of the app that need the data.
    // The `value` prop is extremely important: whatever object, function, or string 
    // you pass into `value` is exactly what the child components will receive.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
      {/* This div is just for visual styling so you can see the theme change. 
        Notice we don't pass ANY props to <ThemeToggleButton />! 
      */}
      <div style={{
        background: theme === 'light' ? '#ffffff' : '#222222',
        color: theme === 'light' ? '#000000' : '#ffffff',
        height: '100vh',
        padding: '20px',
        transition: 'all 0.3s ease'
      }}>
        <h1>React useContext Example</h1>
        <p>Current Theme: <strong>{theme}</strong></p>
        
        {/* Child component rendered here without passing props */}
        <ThemeToggleButton />
      </div>

    </ThemeContext.Provider>
  );
}