import { useState } from "react";

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input type="text" placeholder="enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> <br /> <br />
      <input type="text" placeholder="enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return (
    <>
      <p>The current input value is :{inputValue}</p>
    </>
  );
};

//-------------------------------------------------------------

export const LiftStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};
// export default LiftStateUp; 
// if exported directly then {} needed while importing in App component
