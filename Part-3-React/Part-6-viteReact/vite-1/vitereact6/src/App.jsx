import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const value = useContext(AuthContext);
  console.log("vlaue=",value)
  return <>
  <p> Test {value} </p>
  </>;
}

export default App;
   