import React, { useEffect } from "react";

const MouseEvent = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      let position = `Mouse Position: X=${event.clientX}, Y=${event.clientY}`;
      console.log(`Mouse Position: X=${event.clientX}, Y=${event.clientY}`);
    };
    window.addEventListener("mousemove", handleMouseMove);
   
  }, []);

  return (
    <div> 
      <h1>Move your mouse around! </h1>
    </div>
  );
};

export default MouseEvent;
