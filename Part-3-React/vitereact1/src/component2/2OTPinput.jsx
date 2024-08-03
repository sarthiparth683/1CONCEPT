import React, { useRef } from "react";

const OTPinput = () => {
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      } else {
        console.log(inputRef.current.map((el) => el.value).join(""));
      }
    }
  };

  return (
    <>
      <h1>OTP Input</h1>
      {Array.from({ length: 4 }).map(
        (
          _,
          index // this helps to create multiple boxes
        ) => (
          <input
            key={index}
            type="text"
            ref={(e) => (inputRef.current[index] = e)}
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            style={{
              height: "40px",
              width: "40px",
              textAlign: "center",
              fontSize: "24px",
              margin: "5px",
            }}
          />
        )
      )}
    </>
  );
};

export default OTPinput;
