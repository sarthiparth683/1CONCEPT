import React from "react";
import TopMain from "./TopMain";
import BottomMain from "./BottomMain/BottomMain";
import "../../style/styles.css"

const Main = () => {
  return (
    <div  className="main" >
      <h4>Main</h4>
      <TopMain />
      <BottomMain  />
    </div>
  );
};

export default Main;
