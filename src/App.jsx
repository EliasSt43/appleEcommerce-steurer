import Navbar from './components/Navbar';
import ItemsList from './components/ItemsListContainer/ItemsList';
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
         <ItemsList/>
      </main>
    </>
  );
}

export default App;
