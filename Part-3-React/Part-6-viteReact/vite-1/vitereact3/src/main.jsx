import React from "react";
import ReactDOM from "react-dom/client";
import State from "./1State/3State";
import ButtonWithUseState from "./1State/3State2";
import ButtonWithUseRef from "./1State/3State3";
import Ref from "./2Ref/1Ref";
import Inst from "./3components/running";
import Counter from "./3components/Counter";
import Form from "./3components/Form";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <State/> */}
    {/* <ButtonWithUseState/> */}
    {/* <ButtonWithUseRef/> */}
    {/* <Ref/> */}
    {/* <Inst/> */}
    {/* <Counter/> */}
    <Form />
  </>
);
