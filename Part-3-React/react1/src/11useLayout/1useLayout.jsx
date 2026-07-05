import React, { useState, useLayoutEffect, useRef } from "react";

export default function TooltipLayout() {
  const buttonRef = useRef(null);
  const [tooltipTop, setTooltipTop] = useState(0);

  // We use useLayoutEffect because we need to measure the button's DOM node
  // BEFORE the browser paints the screen to avoid a visual jump.
  useLayoutEffect(() => {
    if (buttonRef.current) {
      // 1. Measure where the button is on the page
      const rect = buttonRef.current.getBoundingClientRect();

      // 2. Set the tooltip position to be exactly 10px below the button
      setTooltipTop(rect.bottom + 10);
    }
  }, []); // Empty array means this runs once when the component mounts

  return (
    <div style={{ padding: "50px" }}>
      <button ref={buttonRef}>Hover Me</button>

      {/* This tooltip relies on the measurement taken in useLayoutEffect */}
      <div
        style={{
          position: "absolute",
          top: `${tooltipTop}px`,
          left: "50px",
          background: "black",
          color: "white",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        I am a perfectly positioned tooltip!
      </div>
    </div>
  );
}
