import './Nav.css';
import './CartWidget'
import CartWidget from './CartWidget';

function Navbar(){
    return (
        <div class="cont">
            <nav>
                <ul class="nav_links">
                    <label class="logo">Mackbooks</label>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                </ul>
            </nav>
           <CartWidget/>
        </div>
    );
}

export default Navbar;