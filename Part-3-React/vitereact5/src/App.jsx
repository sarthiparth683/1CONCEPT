import React from "react";
import Hook1 from "./hooks/hook1";
import { Hook2 } from "./hooks/hook2";
import { ToggleComponent } from "./customhook1/Toggle";
import { ComponentA } from "./customhook2/Compa";
<<<<<<< HEAD
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
=======
import Prop from "./prop/Prop";
>>>>>>> 6e3f4ee2d2af4564186dc8f988da54e036b5fd6d

const App = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "blue", textAlign: "center" }}> App </h1>
      {/* < Hook1 /> */}
      {/* <Hook2 /> */}
      {/* < ToggleComponent /> */}
      {/* < ComponentA /> */}
<<<<<<< HEAD
      < ToggleSwitch />
=======
      <Prop/>
>>>>>>> 6e3f4ee2d2af4564186dc8f988da54e036b5fd6d
    </div>
  );
};

export default App;
 