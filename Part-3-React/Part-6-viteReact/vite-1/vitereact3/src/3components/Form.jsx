import React, { useRef, useState } from "react";

const Form = () => {

    
  return (
    <div>
      <h1>Form </h1>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="ingredients" />
      <input type="text" placeholder="instructions" />
      <button>Submit</button>
    </div>
  );
};

export default Form;
