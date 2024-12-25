import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

const Redux1 = () => {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default Redux1;
  