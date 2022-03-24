import ItemCount from './ItemCount';
import './ItemDetail.css';
import { useState } from "react";


const ItemDetail = ({ id, img, name, description, price, stock}) =>{

    const [cantidad, setCantidad] = useState(1);

    const contAgregar = () => {
        const itemToCart = {
            id,
            img,
            name,
            price,
            cantidad
        }

        console.log(itemToCart)
    }

    return(
        <section>
                <div className="cen">
                    <div className="conte">
                        <div className='contimg'>
                        <img src={img} className="img" alt={name}/>
                        </div>
                        <div className="izq">
                            <h4 className="name">{name}</h4>

                                <div className='contprice'>
                                    <p className='price'>${price}</p>
                                </div>
                              
                                <ItemCount stock={stock} cantidad={cantidad} setCantidad={setCantidad} contAgregar={contAgregar}/>
                                <p className="des">{description}</p>        
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default ItemDetail;