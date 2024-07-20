import React, { useRef } from "react";
import { useEffect } from "react";

const Inputbox = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    console.log("value = ", inputRef.current.value);
  };

  return (
    <div>
      <h2>Inputbox</h2>
      <input type="text" placeholder="Enter title" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Inputbox;
