import './Items.css';
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';

const Item = ({productos}) =>{

    return(
        <section>
                    <div className="card">
                        <img src={productos.img} className="card-img-top imgSection-1" alt="Macbook "/>
                        <div className="card-body">
                            <h5 className="modal-title">{productos.name}</h5>
                            <p className="modal-text desc">{productos.description}</p>
                            <p className='precio'>{productos.price}</p>
                            <div className="modal-footer footer">
                                <ItemCount stock="6"/>
                                <a href="#" className="btn btn-primary boton">Añadir al carrito</a>
                            </div>
                            <Link to='/ItemDetailContainer' className="btn btn-dark ver">Ver más</Link>
                        </div>
                    </div>
        </section>
        
    );
}

export default Item;