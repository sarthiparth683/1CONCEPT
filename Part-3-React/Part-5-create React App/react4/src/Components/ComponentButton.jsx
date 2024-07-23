// CustomButton.jsx
import React from "react";

const CustomButton = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default CustomButton;

// things than can be tested"-
//props should be valildate

// Prompt:- Write test cases using jest and react testing library for a React button component named CustomButton. It accepts props: label (string), onClick (function), and style (object). Use Jest and React Testing Library. Include tests for clicking the button and ensuring it displays the correct label.
