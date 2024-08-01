import { useRef, useEffect } from "react";
import React from 'react'

function RenderCounter() {
  const renderCount = useRef(0);

  useEffect(() => {
    // Increment the render count on each render
    renderCount.current++;
  });

  return <h5>Render Count: {renderCount.current}</h5>;
}
 export {RenderCounter}