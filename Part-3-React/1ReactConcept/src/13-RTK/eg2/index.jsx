import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const Rtk2 = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </>
  );
};

export default Rtk2;
  