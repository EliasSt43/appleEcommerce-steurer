import ItemCount from './ItemCount';
import './ItemDetail.css';
import { useContext, useState } from "react";
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) =>{


    const carritoContext = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);
    const [stockProducto, setStockProducto] = useState(item.stock);
    const [compra, setCompra] = useState(false)

    console.log('carritoContext-itemDetail', carritoContext);

    const contAgregar = (quantityToAdd) => {
        setCompra(true)
        setCantidad(quantityToAdd)
        setStockProducto(stockProducto - quantityToAdd);
        carritoContext.addItem(item, quantityToAdd);
    }

    return(
        <section>
                <div className="cen">
                    <div className="conte">
                        <div className='contimg'>
                        <img src={item.img} className="img" alt={item.name}/>
                        </div>
                        <div className="izq">
                            <h4 className="name">{item.name}</h4>

                                <div className='contprice'>
                                    <p className='price'>${item.price}</p>
                                </div>
                              { !compra &&
                                <ItemCount stock={item.stock} cantidad={cantidad} setCantidad={setCantidad} contAgregar={contAgregar}/>
                                } 
                                <p className="des">{item.description}</p> 
                                  
                                {
                                compra &&
                                <Link to="/cart" className='a-end-button'>
                                    <button className='btn btn-primary'>Terminar mi compra</button>
                                </Link>   
                            }
                                <Link to="/" className='a-end-button'>
                                    <button className='btn btn-primary'>Regresar al listado</button>
                                </Link>  
                                  
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default ItemDetail;