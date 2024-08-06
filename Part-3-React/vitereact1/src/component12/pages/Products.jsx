import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/posts";
  const getdata = () => {
    axios.get(URL, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  };

  useEffect(() => {
    getdata();
  }, [page]);

  return <div>Products</div>;
};

export default Products;
