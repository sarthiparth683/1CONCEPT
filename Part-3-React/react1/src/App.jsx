import Test from "./1Test/Test";
import Zstate from "./2useState/Zstate";
import UseEff from "./3useEffect/1useEff";
import UseMemo1 from "./5useMemo/1Usememo";
import UseCallBack from "./6useCallback/1useCall";
import Custom2 from "./7CustomHook/2Custom";
import Reducer1 from "./8useReducer/1UseRed";
import Zroute from "./9Routing/Zroute";
import MyModalComponent from "./10reactPortal/1Portal";
import TooltipLayout from "./11useLayout/1useLayout";
import ZuseRef from "./4useRef/ZuseRef";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React-Concepts</h1>
      {/* <Test /> */}
      {/* <Zstate /> */}
      {/* <UseEff /> */}
      {/* <ZuseRef/> */}
      {/* <UseMemo1 /> */}
      <UseCallBack />
      {/* <Custom2 /> */}
      {/* <Reducer1/> */}
      {/* <Zroute /> */}
      {/* <MyModalComponent/> */}
      {/* <TooltipLayout/> */}
    </>
  );
}

export default App;
