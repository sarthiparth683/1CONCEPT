import React, { useState } from "react";

function Timer8() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(intervalId);
          return prevCount - 1;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
}
export { Timer8 };
