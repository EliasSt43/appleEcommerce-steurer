import './Items.css';
import {Link} from 'react-router-dom';

const Item = ({productos}) =>{

    return(
        <section>
                    <div className="card">
                        <img src={productos.img} className="card-img-top imgSection-1" alt={productos.name}/>
                        <div className="card-body">
                            <h5 className="modal-title">{productos.name}</h5>
                            <p className="modal-text desc">{productos.description}</p>
                            <p className='precio'>${productos.price}</p>
                            <div className="modal-footer footer">
                                <Link to={`/detail/${productos.id}`} className="btn btn-primary ver">Ver más</Link>
                            </div>
                            
                        </div>
                    </div>
        </section>
        
    );
}

export default Item;