import React from "react";
import useFetch from "../hooks/useFetch";

const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, error, isLoading } = useFetch(url);
  console.log("error", error);
  if (isLoading) {
    return <>Loading....</>;
  }
  console.log("data", data);
  return (
    <div>
      <h1>Todo</h1>
      <div>
        {data &&
          data.map((el) => {
            return (
              <div key={el.id} style={{ marginTop: "20px" }}>
                <p>{el.title}</p>
                <p>
                  Compeleted: {el.completed ? "Completed" : "Not completed"}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todo;
