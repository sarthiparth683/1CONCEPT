import React from 'react'
import { useRef, useEffect } from "react";

function TextInputWithFocus() {
  const inputEl = useRef(null);

  useEffect(() => {
    // Automatically focus the input using the useRef hook
    inputEl.current.focus();
  }, []);

  return <input ref={inputEl} type="text" />;
}
 export {TextInputWithFocus}