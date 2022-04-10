import './Items.css';
import {Link} from 'react-router-dom';

const Item = ({listItems}) =>{

    return(
        <section>
                    <div className="card">
                        {/* <img src={listItems.img} className="card-img-top imgSection-1" alt={listItems.name}/> */}
                        <div className="card-body">
                            <h5 className="modal-title">{listItems.name}</h5>
                            <p className="modal-text desc">{listItems.description}</p>
                            <p className='precio'>${listItems.price}</p>
                            <div className="modal-footer footer">
                                <Link to={`/detail/${listItems.id}`} className="btn btn-primary ver">Ver más</Link>
                            </div>
                            
                        </div>
                    </div>
        </section>
        
    );
}

export default Item;