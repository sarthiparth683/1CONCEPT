import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingIndicaator from "./LoadingIndicaator";
import Pagination from "./Pagination";
import "../styles/style.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://picsum.photos/v2/list?limit=20&page=${page}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    return () => {
      console.log("Unmounting...");
    };
  }, [page]);

  if (loading) {
    return <LoadingIndicaator />;
  }

  return (
    <div className="products" >
      {data &&
        data.map((el) => {
          return (
            <div key={el.id} className="product-card" >
              <img
                src={el.download_url}
                alt={el.author}
                height={300}
                width={300}
                style={{ objectFit: "contain" }}
              />
              <p>{el.author}</p>
            </div>
          );
        })}
      <Pagination page={page} totalPage={10} pageChange={setPage} />
    </div>
  );
};

export default Products;
