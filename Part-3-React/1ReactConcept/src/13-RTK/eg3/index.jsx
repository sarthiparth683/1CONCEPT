import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const Rtk3 = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default Rtk3;
       