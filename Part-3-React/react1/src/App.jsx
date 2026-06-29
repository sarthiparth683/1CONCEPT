import Test from "./1Test/Test";
import WelcomeMessage from "./1Test/Comp";
import UserProfile from "./1Test/Props";
import "./App.css";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React-Concepts</h1>
      <Test />
      <WelcomeMessage name="Sarthi" />
      <UserProfile name="Alice" age={25} isOnline={true} />
      <UserProfile name="Bob" age={32} isOnline={false} />
    </>
  );
}

export default App;
