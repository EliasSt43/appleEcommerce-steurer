import './Nav.css';
import './CartWidget'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <div className="cont" id='nav'>
            <nav>
                <ul className="nav_links">
                    <Link to='./' className="logo"><img src="https://imagenpng.com/wp-content/uploads/2017/05/Apple_Logo_Png_06.png" alt="Logo" className='appel' />Apple</Link>
                    <li><Link to="./productos/Iphone">Iphone</Link></li>
                    <li><Link to="./productos/Macbook">MacBook</Link></li>
                    <li><Link to="./productos/Imac">iMac</Link></li>
                    <li><Link to="./productos/Appelwatch">Appel Watch</Link></li>
                    <li><Link to="./productos/Airpods">Air Pods</Link></li>
                    <li><Link to="./productos/Ipad">Ipad</Link></li>
                </ul>
            </nav>
            <Link to="/cart">
                <CartWidget/>
           </Link>
        </div>
    );
}

export default Navbar;