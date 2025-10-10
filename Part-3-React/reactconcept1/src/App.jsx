import Chakra1 from "./10-Chakraui/main";
import Context1 from "./11-useContext/main";
import Redux1 from "./12-Redux/eg1/App";
import Rtk1 from "./13-RTK/eg1/App";
import Rtk2 from "./13-RTK/eg2";
import Test from "./1Test/Test";
import ToggleComponent from "./2-customhook1/Toggle";
import LiftStateUp from "./2-LiftStatUp/LiftStateUp";
import ToggleSwitch from "./3-ToggleSwitch/ToggleSwitch";
import JsonFetch from "./4-jsonFetch/Local";
import Todo3 from "./5-Todo/Todo";
import Todo2 from "./6-Todo2/Todo";
import Fetch from "./7-Pagination/Fetch";
import Counter2 from "./8-useReducer/Counter";
import RoutesComponent from "./9-Routes/1eg/RoutesComponent";
import Route3 from "./9-Routes/2eg/output/output";
import "./App.css";

import { useContext } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import { ThemeContext } from "./context/ThemeContext";
import Theme from "./components/Theme";
import AllRoutes from "./routes/AllRoutes";

function App() { 
  const { theme, toggle } = useContext(ThemeContext); 
  return (  
    <>
      <h1 style={{ textAlign: "center" }}>React-Concepts</h1>
      {/* <Test /> */}
      {/* <ToggleComponent /> */}
      {/* <LiftStateUp/> */}
      {/* <ToggleSwitch/> */}
      {/* <JsonFetch/> */}
      {/* <Todo3/> */}
      {/* <Todo2 /> */}
      {/* <Fetch/> */}
      {/* <Counter2/> */}
      {/* <RoutesComponent/> */}
      {/* <Route3 /> */}
      {/* <Chakra1/>  */}
      {/* <Context1 /> */}
      {/* 12-Redux has 2 examples */}
      {/* <Redux1/> */}
      {/* <Redux2 /> */}
      {/* 13-RTK has 3 examples */}
      {/* <Rtk1/> */}
      {/* <Rtk2 /> */}
       <div
      className="w-full h-screen"
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <AllRoutes />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Theme />
      {/* <Todo /> */}
    </div>
    </>
  );
}

export default App;
