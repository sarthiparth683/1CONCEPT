import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  let URL = `https://fakestoreapi.com/products/${id}?page=1&limit=6`;
  const getData = () => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div>
      <h1>ProductDetails</h1>
      <div>
        <h2>{data?.title}</h2>
        <img src={data?.image} alt="" height={300} />
        <p>Price: {data?.price} </p>
        <p>{data?.description}</p>
        <p>
          Rating: {data?.rating?.rate} - {data?.rating?.count}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
