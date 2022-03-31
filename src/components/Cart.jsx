import './Cart.css'
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";
import { Link } from 'react-router-dom';

export const Cart = () => {
    const carritoContext = useContext(CartContext);
    const productosCarrito = carritoContext.productosCarrito;
    console.log('productos Carrito', productosCarrito);


    return(
        <div>
             {
                productosCarrito.length>0 ?
                <>
                    {
                        productosCarrito.map(producto=>(
                            <CartItem key={producto.item.id} productoProp={producto}/>
                        ))
                    }
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <p className="totalprice">Total: ${carritoContext.getTotalPrice()}</p>
                        <button  className="btn btn-primary"  onClick={carritoContext.clear}>Vaciar carrito</button>
                    </div>
                </>
                :
                <div className='no'>
                    <div className='div'>
                        <p className="p">No hay productos</p>
                    </div>
                    <div className='div'>
                        <Link to="/">
                            <button className='btn btn-primary'>Volver a Inicio</button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}