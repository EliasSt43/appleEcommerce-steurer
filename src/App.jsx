import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemsListContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CustomCartContext } from './components/CustomCartContext';
import { Cart } from './components/Cart';

function App() {
  return (
  <CustomCartContext>
    <BrowserRouter>

          <Navbar />
            <a href="https://wa.me/543755637756" className="btn2" target="_blank"><button className="btn btn-primary ">Contacto</button></a>
        <Routes>
          <Route path='/' element={<ItemsListContainer saludo="¡Apple Ecommerce!"/>}/>
          <Route path='/productos/:categoriaId' element={<ItemsListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>

        </Routes> 
    </BrowserRouter>
  </CustomCartContext>
  );
}

export default App;
