import { useContext } from "react"
import { CartContext } from "./CartContext"
import './CartItem.css';

export const CartItem = ({productoProp}) => {

    const carritoContext = useContext(CartContext);

    return(
        <div className="contenedor">
            <div className="cartitem" >
                <h1 className="titu">{productoProp.item.name}</h1>
                <div className="cartitem1">
                    <div className="contimg">
                        <img className="imagen" src={productoProp.item.img} alt="imagen"/>
                    </div>
                        <div className="contimg">
                        <p>Precio: {productoProp.item.price}</p>
                        </div>
                        <div className="contimg">
                        <p>Cantidad: {productoProp.quantityToAdd}</p>
                        </div>
                        <div className="contimg">
                        <button className="btn btn-primary" onClick={()=>carritoContext.removeItem(productoProp.item.id)}>Eliminar producto</button>
                        </div>
                </div>
            </div>
        </div>
    )
}