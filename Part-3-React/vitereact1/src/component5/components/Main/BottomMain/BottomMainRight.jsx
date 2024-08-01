import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const BottomMainRight = () => {
  const { isloggedin, login, logout, test } = useContext(AuthContext);
  console.log(test)
  return (

    <div className="bottommainright">
        <h1> {test}  </h1>
      <p> BottomMainRight: {isloggedin ? "LoggedIn" : "Not LoggedIn"}</p>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default BottomMainRight;
