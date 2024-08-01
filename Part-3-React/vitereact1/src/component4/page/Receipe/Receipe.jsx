import React, { useState } from "react";
import Form from "./Form";
import RecipeList from "./RecipeList";

const Receipe = () => {
  const [formData, setFormData] = useState([]);
  const handleSubmit = (val) => {
    setFormData([...formData, val]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <RecipeList   data={formData} />
    </div>
  );
};

export default Receipe;
