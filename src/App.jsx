import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';

function App() {
  return (
  <>
      <header>
        <Navbar />
        <div>
          <a href="#" className="btn2" target="_blank"><button className="button">Contacto</button></a>
        </div>
      </header>
      <main>
        <div>
         <ItemsListContainer saludo="¡Apple Macbooks Ecommerce!"/ >
         </div>
      </main>
    </>
  );
}

export default App;
