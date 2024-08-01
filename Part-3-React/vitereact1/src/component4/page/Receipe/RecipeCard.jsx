import React from "react";

const RecipeCard = ({ name, ingredients, instruction }) => {
  return (
    <div style={{ background: "green", margin: "10px", padding: "10px" }}>
      <p>{name}</p>
      <p>{ingredients}</p>
      <p>{instruction}</p>
    </div>
  );
};

export default RecipeCard;
