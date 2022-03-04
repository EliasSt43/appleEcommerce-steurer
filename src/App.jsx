import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';

function App() {
  return (
  <>
      <header>
        <Navbar />
        <div>
          <a href="#" class="btn2" target="_blank"><button class="button">Contacto</button></a>
        </div>
      </header>
      <main>
         <ItemsListContainer greeting="¡Apple Macbooks Ecommerce!"/ >
      </main>
    </>
  );
}

export default App;
