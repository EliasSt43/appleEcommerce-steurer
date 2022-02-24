import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
  
      <header>
        <Navbar />
        <div id="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
  );
}

export default App;
