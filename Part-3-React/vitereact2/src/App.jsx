import Page from "./Pagination/Page";
import Todo2 from "./Todo2/Todo";

const App = () => {
  return (
    <>
      <h1
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          marginTop: "0px",
        }}
      >
        App
      </h1>
      {/* <Todo2 /> */}
      <Page />
    </>
  );
};

export default App;
