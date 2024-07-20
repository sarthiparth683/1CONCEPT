import './App.css';
import Impurefn from './components/Impurefn';
import Product from './components/Product';
import Purefn from './components/Purefn';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      {/* <Product /> */}
      <Purefn />
      <Impurefn/>
    </div>
  );
}

export default App;
