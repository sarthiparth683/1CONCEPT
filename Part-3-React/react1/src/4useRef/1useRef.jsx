// Refs in React are incredibly useful for accessing and manipulating DOM elements directly. Refs are also amazing at persisting data between renders which is makes it possible to store persisted component data without causing a re-render when it is changed.

import React, { useState, useRef, useEffect } from "react";

function Useref() {
  const [name, setName] = useState("Sarthi");
  const previousName = useRef(null);

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <div>
        {previousName.current} = {name}
      </div>
    </>
  );
}

export default Useref;
