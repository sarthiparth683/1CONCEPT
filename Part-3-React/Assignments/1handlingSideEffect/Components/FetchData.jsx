import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.title = `!!New Title: ${title}`;
  }, [title]);

  return (
    <div>
      <button onClick={() => setTitle(title + 1)}>Click!! to Change Title Number</button>
      <h1>Fetched Data</h1>
      {data.map((item) => (
        <div>
          <div key={item.id}>{item.title}</div>
          <div key={item.id}>{item.price}</div>
          <img style={{ width: "100px" }} key={item.id} src={item.image} />
        </div>
      ))}
    </div>
  );
};

export default FetchData;
