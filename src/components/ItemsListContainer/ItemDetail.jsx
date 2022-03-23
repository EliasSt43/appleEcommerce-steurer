import ItemCount from './ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom';


const ItemDetail = ({img, name, description, price}) =>{
    return(
        <section>
                <div className="cen">
                    <div className="conte">
                        <div className='contimg'>
                        <img src={img} className="img" alt={name}/>
                        </div>
                        <div className="izq">
                            <h4 className="name">{name}</h4>
                            
                            <div className="contador">
                                <div className='contprice'>
                                    <p className='price'>${price}</p>
                                </div>
                                    <ItemCount stock="5"/>
                            </div>   
                                <a href="#" className="btn btn-primary botton">Añadir al carrito</a>
                                <p className="des">{description}</p>        
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default ItemDetail;