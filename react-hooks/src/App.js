import logo from './logo.svg';
import './App.css';
import FavoritColor from './pages/FavoritCalor';
import Car from './pages/Car';
import Timer from './pages/Timer';
import Counter from './pages/Counter.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <FavoritColor />
      <Car />
      <Timer />
      <Counter />
    </div>
  );
}

export default App;
