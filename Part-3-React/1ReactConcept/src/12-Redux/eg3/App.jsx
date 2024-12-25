import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";

const Counter = () => {
  const count = useSelector((state) => state.count);
  return <h2>Counter Value: {count}</h2>;
};
const CounterControls = () => {
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

// Main App Component
export const Redux3 = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
        <h1>Redux Counter Redux3</h1>
        <Counter />
        <CounterControls />
      </div>
    </Provider>
  );
};

export default Redux3;
