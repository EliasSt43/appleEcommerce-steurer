import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemsListContainer/ItemDetailContainer';
import Preguntas from './components/Preguntas';

function App() {
  return (

  <BrowserRouter>

        <Navbar />
          <a href="#" className="btn2" target="_blank"><button className="button">Contacto</button></a>
      <Routes>
        <Route path='/' element={<ItemsListContainer saludo="¡Apple Ecommerce!"/>}/>
        <Route path='/productos' element={<ItemsListContainer/>}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/ItemDetailContainer' element={<ItemDetailContainer/>}/>
        <Route path='/Preguntas' element={<Preguntas/>}></Route>

      </Routes> 
  </BrowserRouter>

  );
}

export default App;
