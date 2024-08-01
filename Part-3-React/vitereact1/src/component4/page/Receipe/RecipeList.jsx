import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ data }) => {
  return (
    <div>
      <h1>RecipeList</h1>
      {data.map((el,i) => {
        return <RecipeCard key={el.name + i} {...el} />;
      })}
    </div>
  );
};

export default RecipeList;
