import './Nav.css';
import './CartWidget'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <div className="cont" id='nav'>
            <nav>
                <ul className="nav_links">
                    <Link to='./' className="logo">Macbooks</Link>
                    <li><Link to="./">Productos</Link></li>
                    <li><Link to="./Preguntas">Preguntas Frecuentes</Link></li>
                    <li><Link to="#">Sobre Nosotros</Link></li>
                </ul>
            </nav>
           <CartWidget/>
        </div>
    );
}

export default Navbar;