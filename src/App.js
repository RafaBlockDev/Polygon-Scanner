import Moralis from "moralis";
import logo from './logo.svg';
import './App.css';

Moralis.initialize(process.env.REACT_APP_MORALIS_APPLICATION_ID);
Moralis.serverURL = process.env.REACT_APP_MORALIS_SERVER_URL;

function App() {
  return (
    <div className="App">
      <h1>ManiacScan</h1>
    </div>
  );
}

export default App;
