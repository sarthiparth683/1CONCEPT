import { useEffect, useState } from "react";

const JsonFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("http://JsonFetchhost:3000/products ")
    // fetch("https://fakestoreapi.com/products" )
    let fetchData = async () => {
      try {
        // const response = await fetch("https://fakestoreapi.com/products");
        const response = await fetch("http://localhost:3000/products ");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <>
        <h1>JSON-Server and api fetching</h1>
        <ul>
          <li>ui will show on same desktop, - hoistin won't apply </li>
          <li>in terminal run this command</li>
          <li>npm install -g json-server</li>
          <li>json-server --watch db.json --port 3000</li>
        </ul>
        <ul>
          {data.map((item) => (
            // <li key={item.id}>{item.title}</li>
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    </>
  );
};

export default JsonFetch;
