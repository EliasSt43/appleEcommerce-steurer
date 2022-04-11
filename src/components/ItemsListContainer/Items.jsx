import './Items.css';
import {Link} from 'react-router-dom';

const Item = ({item}) =>{

    return(
        <section>
                    <div className="card">
                        <img src={item.img} className="card-img-top imgSection-1" alt={item.name}/>
                        <div className="card-body">
                            <h5 className="modal-title">{item.name}</h5>
                            <p className="modal-text desc">{item.description}</p>
                            <p className='precio'>${item.price}</p>
                            <div className="modal-footer footer">
                                <Link to={`/detail/${item.id}`} className="btn btn-primary ver">Ver más</Link>
                            </div>
                        </div>
                    </div>
        </section>
        
    );
}

export default Item;