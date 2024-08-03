import React from "react";
import State1 from "./1State";
import Ref1 from "./2Ref";
import Timer from "./3Timer";

const Comp3 = () => {
  return (
    <>
      <h3 style={{ textAlign: "center", color: "blue" }}>Component No.3</h3>
      {/* <State1 /> */}
      {/* <Ref1 /> */}
      <Timer />
    </>
  );
};

export default Comp3;
