import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (!url) return;
    setIsloading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
