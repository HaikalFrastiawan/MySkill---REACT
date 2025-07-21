import logo from './logo.svg';
import './App.css';
import FavoritColor from './pages/FavoritCalor';
import Car from './pages/Car';

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
      <Timer /> //React UseEffect
      <Counter /> //React UseEffect
    </div>
  );
}

export default App;

