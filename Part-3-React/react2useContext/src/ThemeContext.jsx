import { createContext } from 'react';

// ==========================================
// STEP 1: CREATE THE CONTEXT
// ==========================================

// We use createContext() to create the context object.
// The value passed here (null) is the "default" value. It is ONLY used 
// if a component tries to consume this context but there is no Provider 
// wrapping it higher up in the component tree.
export const ThemeContext = createContext(null);