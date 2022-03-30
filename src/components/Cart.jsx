import { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
    const carritoContext = useContext(CartContext);
    const productosCarrito = carritoContext.productosCarrito;
    console.log('productos Carrito', productosCarrito);


    return(
        <div>
            {
                productosCarrito.map(producto=>(
                    <CartItem key={producto.item.id} productoProp={producto}/>
                ))
            }
            <div style={{display:"flex", justifyContent:"center"}}>
                <button  className="btn btn-primary"  onClick={carritoContext.clear}>Vaciar carrito</button>
            </div>
        </div>
    )
}