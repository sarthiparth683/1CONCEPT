import React from "react";
import Hook1 from "./hooks/hook1";
import { Hook2 } from "./hooks/hook2";
import { ToggleComponent } from "./customhook1/Toggle";
import { ComponentA } from "./customhook2/Compa";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

const App = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "blue", textAlign: "center" }}> App </h1>
      {/* < Hook1 /> */}
      {/* <Hook2 /> */}
      {/* < ToggleComponent /> */}
      {/* < ComponentA /> */}
      < ToggleSwitch />
    </div>
  );
};

export default App;
 