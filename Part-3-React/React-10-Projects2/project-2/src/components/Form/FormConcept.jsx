import React, { useState } from "react";

const FormConcept = () => {
  const [formData, setFormData] = useState({
    hobby: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleInputChange = (event) => {  //event is whole input tag
    const { name, value } = event.target;  // event.target(ie. inputtag) is destructured here
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })); 
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">hobby</label>

          <input
            type="text"
            name="hobby"
            value={formData.hobby}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        <p>{formData.hobby}</p>
      </div>
    </div>
  );
};

export default FormConcept;
