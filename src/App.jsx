import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemsListContainer/ItemDetailContainer';

function App() {
  return (

  <BrowserRouter>

        <Navbar />
          <a href="#" className="btn2" target="_blank"><button className="button">Contacto</button></a>
      <Routes>
        <Route path='/' element={<ItemsListContainer saludo="¡Apple Macbooks Ecommerce!"/>}/>
        <Route path='/ItemDetailContainer' element={<ItemDetailContainer/> }/>
      </Routes> 
  </BrowserRouter>

  );
}

export default App;
