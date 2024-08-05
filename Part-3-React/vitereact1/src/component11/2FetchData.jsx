import React, { useEffect, useReducer } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";
const getData = () => {
  return axios.get(URL);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH-SUCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    case "FETCH_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        data:[],
      };
  }
};

const initialState = {
  loading: false,
  error: false,
  data: [],
};
const FetchData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_LOADING" });
    getData()
      .then((res) => {
        dispatch({ type: "FETCH-SUCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED" });
        console.log(err);
      });
  }, []);


  console.log(state)
  return <div style={{ backgroundColor: "lightgreen" }}>
    <h1>FetchData</h1>
    {state.loading && <h1>Loading...</h1> }
    {state.error && <h1>Something is wrong...</h1> }
    {state.data && state.data.map((el)=>{
      return (
        <div  key={el.id} >
          <b> {el.title} </b>
        </div>
      )
    }) }
    </div>;
};

export default FetchData;
