import { useState, useRef } from "react";

// useRef also remembers value through re-renders;
// but does not trigger re-renders

const ButtonWithUseRef = () => {
  let ref = useRef(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref);
  };

  console.log("ButtonWithUseRef rendering...");
  return (
    <div>
      <h1>Count : {ref.current}</h1>
      <button onClick={handleClick}>BUTTON WITH USEREF</button>
      <br />
      <br />
      <button onClick={() => setFlag(!flag)}>{flag ? "TRUE" : "FALSE"}</button>
    </div>
  );
};

export default ButtonWithUseRef;
