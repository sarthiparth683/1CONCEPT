import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Axio.css";

const Axio1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Data</h1>
      <div className="data">
        {data.map((el) => (
          <div className="box" key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.category}</p>
            <img className="images" src={el.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Axio1;
