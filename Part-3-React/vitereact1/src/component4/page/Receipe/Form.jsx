import React, { useRef } from "react";

const Form = ({onSubmit}) => {
  const nameRef = useRef("");
  const ingrRef = useRef("");
  const instRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const ingredients = ingrRef.current.value;
    const instruction = instRef.current.value;
    onSubmit({name, ingredients, instruction});
    nameRef.current.value = '';
    ingrRef.current.value = '';
    instRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <input type="text" placeholder="name" ref={nameRef} required />
        <input type="text" placeholder="ingredients" ref={ingrRef} required />
        <input type="text" placeholder="instructions" ref={instRef} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
