import React from "react";
import { useContext } from "react";
import { AppContext } from "./AuthContext";

const Test = () => {
  const { test } = useContext(AppContext);

  return <div>Test {test} </div>;
};

export default Test;
