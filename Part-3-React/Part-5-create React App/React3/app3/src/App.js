import './App.css';
import Complif from './component/Complif';
import UseEffect from './component/UseEffect';
import Fetch from './component/Fetch';


function App() {
  document.title = "My Page Title";
  return (
    <div className="App">
      <h1>React App - 3</h1>
      {/* <Complif/> */}
      {/* <UseEffect/> */}
      <Fetch />
    </div>
  );
}

export default App;
