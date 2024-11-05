import React, { useState } from "react";

const Form1 = () => {
  const [value, setValues] = useState({
    firstname: "",
    email: "",
  });

  const handleChanges = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <>
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          value={value.firstname}
          onChange={handleChanges}
          required
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={value.email}
          onChange={handleChanges}
          required
        />

        <button
          type="button"
          onClick={() =>
            setValues({
              firstname: "",
              email: "",
            })
          }
        >
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form1;
