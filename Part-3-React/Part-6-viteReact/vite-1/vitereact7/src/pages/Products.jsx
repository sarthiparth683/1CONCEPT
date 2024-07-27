import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const getPageParamsCheck = (page)=>{
  page = Number(page);
  if (Number.isNaN(page)) {
    return 1;
  }
  if (page < 1) {
    return 1;
  }
  return page;
}

const Products = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    getPageParamsCheck(searchParams.get("page"))
  );
  const [searchText, setSearchText] = useState(searchParams.get("q") || "");

  // console.log({import.meta.env.VITE_REACT_FAKE_STORE_API})
  let URL = `https://fakestoreapi.com/products?page=${page}&limit=4`;
  // let URL = `${import.meta.env.VITE_REACT_FAKE_STORE_API}?page=${page}&limit=4`;
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
  }, [page]);

  useEffect(() => {
    let params = {};
    params.page = page;
    params.q = searchText;
    setSearchParams(params);
  }, [page, searchText]);

  console.log(data);
  return (
    <div>
      <h1> Products</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
        }}
      >
        {data &&
          data.map((el) => {
            return (
              <div
                key={el.id}
                style={{ background: "lightblue", padding: "4px" }}
              >
                <Link to={`/products/${el.id}`}>
                  <img
                    src={el.image}
                    alt={el.title}
                    height={300}
                    width={300}
                    style={{ objectFit: "contain" }}
                  />
                  {el.title}
                </Link>
                <p>Price: {el.price}</p>
              </div>
            );
          })}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          Prev
        </button>
        <b>- {page} -</b>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Products;
