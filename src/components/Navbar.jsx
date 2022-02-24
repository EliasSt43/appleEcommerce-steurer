import './Nav.css';

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
            <a class="cta" href="#"><button>Contacto</button></a>
        </div>
    );
}

export default Navbar;