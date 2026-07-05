import Test from "./1Test/Test";
import Comp from "./1Test/Comp";
import UserProfile from "./1Test/Props";
import Counter from "./2useState/1useState";
import UseEff from "./3useEffect/1useEff";
import Useref from "./4useRef/1useRef";
import ExpensiveCalculator from "./5useMemo/1Usememo";
import UseCallBack from "./6useCallback/1useCall";
import Custom2 from "./7CustomHook/2Custom";
import Reducer1 from "./8useReducer/1UseRed";
import Zroute from "./9Routing/Zroute";
import MyModalComponent from "./10reactPortal/1Portal";
import TooltipLayout from "./11useLayout/1useLayout";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React-Concepts</h1>
      {/* <Test /> */}
      {/* <Comp name="Sarthi" /> */}
      {/* <UserProfile name="Alice" age={25} isOnline={true} /> */}
      {/* <UserProfile name="Bob" age={32} isOnline={false} /> */}
      {/* <Counter /> */}
      {/* <UseEff /> */}
      {/* <Useref /> */}
      {/* <ExpensiveCalculator /> */}
      {/* <UseCallBack /> */}
      {/* <Custom2 /> */}
      {/* <Reducer1/> */}
      {/* <Zroute /> */}
      {/* <MyModalComponent/> */}
      <TooltipLayout/>
    </>
  );
}

export default App;
