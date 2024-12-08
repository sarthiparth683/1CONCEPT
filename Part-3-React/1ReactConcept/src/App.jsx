import styles from "./styles/app.module.css"; // Styling
import { LiftStateUp } from "./1-LiftStatUp/LiftStateUp"; // useState and input tag
import ToggleComponent from "./2-customhook1/Toggle";
import ToggleSwitch from "./3-ToggleSwitch/ToggleSwitch";
import JsonFetch from "./4-jsonFetch/Local";
import Todo from "./5-Todo/Todo";
import Todo2 from "./6-Todo2/Todo";
import Fetch from "./7-Pagination/Fetch";
import Counter from "./8-useReducer/Counter";
import RoutesComponent from "./9-Routes/1eg";
import Rout2 from "./9-Routes/2eg/Rout2";
import Chakra1 from "./10-Chakraui/main";
import Context1 from "./11-useContext/main";
import Main from "./9-Routes/4eg/Main";
import Exg5 from "./9-Routes/5eg/Main/Exg5";
import Redux from "./12-Redux/main";
import AllRoutes from "./9-Routes/3eg/AllRoutes";

const App = () => {
  return (
    <>
      <h1 className={styles.header}>React-App</h1> <br />
      {/* <LiftStateUp />  */}
      {/* <ToggleComponent /> */}
      {/* <ToggleSwitch /> */}
      {/* <JsonFetch />     */}
      {/* <Todo /> */}
      {/* <Todo2 /> */}
      {/* <Fetch /> */}
      {/* <Counter /> */}
      <RoutesComponent />
      {/* <Rout2 /> */}
      {/* < AllRoutes /> */}
      {/* <Main /> */}
      {/* <Exg5 /> */}
      {/* <Chakra1 /> */}
      {/* <Context1 />  */}
      {/* <Redux />*/}
    </>
  );
};

export default App;
