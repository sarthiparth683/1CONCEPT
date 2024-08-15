import React, { useState } from "react";

export const Hook2 = () => {
  const [vegetarian, setVegetarian] = useState(false);
  const [engineer, setEngineer] = useState(false);
  const [lovesCoding, setLovesCoding] = useState(false);

  const toggleVegetarian = () => setVegetarian((prev) => !prev);
  const toggleEngineer = () => setEngineer((prev) => !prev);
  const toggleLovesCoding = () => setLovesCoding((prev) => !prev);

  return (
    <div>
      <button onClick={toggleVegetarian}>
        Vegetarian: {vegetarian ? "Yes" : "No"}
      </button>
      <button onClick={toggleEngineer}>
        Engineer: {engineer ? "Yes" : "No"}
      </button>
      <button onClick={toggleLovesCoding}>
        Loves Coding: {lovesCoding ? "Yes" : "No"}
      </button>
    </div>
  );
};
