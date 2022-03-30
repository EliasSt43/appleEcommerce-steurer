import ItemCount from './ItemCount';
import './ItemDetail.css';
import { useContext, useState } from "react";
import { CartContext } from '../CartContext';


const ItemDetail = ({item}) =>{


    const carritoContext = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);
    const [stockProducto, setStockProducto] = useState(item.stock);

    console.log('carritoContext-itemDetail', carritoContext);

    const contAgregar = (quantityToAdd) => {
        setCantidad(quantityToAdd)
        setStockProducto(stockProducto - quantityToAdd);
        carritoContext.addItem(item, quantityToAdd);
        carritoContext.isInCart(item)
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
                              
                                <ItemCount stock={item.stock} cantidad={cantidad} setCantidad={setCantidad} contAgregar={contAgregar}/>
                                <p className="des">{item.description}</p>        
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default ItemDetail;