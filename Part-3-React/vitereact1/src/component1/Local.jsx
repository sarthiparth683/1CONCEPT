import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Local = () => {
  const [data1, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products ")
      // fetch("https://fakestoreapi.com/products ")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (    
    <>
      <div>
        <h1>JSON-Server</h1>
        <ul>
          {data1.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Local;
