import React, { useEffect, useRef } from "react";
import "../CSS/multiinput.css";

const Multinput = () => {
  const inputRef = useRef([]);

  const handleSubmit = () => {
    console.log(inputRef.current[0].value);
    console.log(inputRef.current[1].value);
    console.log(inputRef.current[2].value);
    console.log(inputRef.current[3].value);
  };

  return (
    <div>
      <h2>OTP Input</h2>
      <input type="text" ref={(e) => (inputRef.current[0] = e)} />
      <input type="text" ref={(e) => (inputRef.current[1] = e)} />
      <input type="text" ref={(e) => (inputRef.current[2] = e)} />
      <input type="text" ref={(e) => (inputRef.current[3] = e)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Multinput;
