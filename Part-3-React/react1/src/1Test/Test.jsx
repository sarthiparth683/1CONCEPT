import React from "react";
import UserProfile from "./Props";
import Comp from "./Comp";

const Test = () => {
  return (
    <>
      <Comp name="Sarthi" age="24" prop3="prop3" prop4="prop4" />
      <UserProfile name="Alice" age={25}  />
    </>
  );
};

export default Test;
