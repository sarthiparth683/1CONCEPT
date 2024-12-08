import { useEffect, useState } from "react";

const JsonFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        // const response = await fetch("https://fakestoreapi.com/products");
        const response = await fetch("http://localhost:3000/products");
        // const response = await fetch("http://localhost:3000/users ");
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
          <li>json-server --watch db.json --port 3000 = run this command in same directory folder</li>
        </ul>
        <ul>
          <h1>Fetched - Data</h1>
          {data.map((item) => (
            // <li key={item.id}>{item.title}</li>   // Api Data
            <li key={item.id}>{item.name}</li> // json Data
          ))}
        </ul>
      </>
    </>
  );
};

export default JsonFetch;
