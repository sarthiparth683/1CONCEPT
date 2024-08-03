import React, { useState } from "react";

const InputComponent = () => {
  const [inputvaluzz, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputvaluzz} onChange={handleInputChange} />
      <p>Input Value: {inputvaluzz}</p>
    </div>
  );
};

export default InputComponent;
