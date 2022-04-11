import './Cart.css'
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";
import { Link } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../FireBase';

export const Cart = () => {
    const carritoContext = useContext(CartContext);
    const productosCarrito = carritoContext.productosCarrito;

    const sendOrder = async(e) => {
        e.preventDefault();
        const nombre = e.target[0].value;
        const telefono = e.target[1].value;
        const gmail = e.target[2].value;

        const newOrder = {
            buyer:{
                name: nombre,
                phone: telefono,
                email: gmail
            },
            items: productosCarrito,
            total: carritoContext.getTotalPrice(),
            date: Timestamp.fromDate(new Date())
        }

        const ordersCollection = collection(db, 'Orders');
        await addDoc(ordersCollection, newOrder);
        alert('Ordern Enviada');
    }

    return(
        <>
        <div>
             {
                productosCarrito.length>0 ?
                <>
                    {
                        productosCarrito.map(producto=>(
                            <CartItem key={producto.item.id} productoProp={producto}/>
                        ))
                    }
                    <div className='botones'>
                    <p className="totalprice">Total: ${carritoContext.getTotalPrice()}</p>
                        
                    </div>
                    <div className='formulario'>
                        <form className='form' onSubmit={sendOrder}>
                            <input className="form-control" type="text" placeholder='Nombre'/>
                            <input className="form-control" type="text" placeholder='Teléfono'/>
                            <input className="form-control" type="gmail" placeholder='example@gmail.com'/>
                            <button className='btn btn-primary enviar' type='submit'>Enviar orden</button>
                        </form>
                    </div>
                    <div className='botones'>
                        <button  className="btn btn-primary borrar" onClick={carritoContext.clear}>Vaciar carrito</button>
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
        </>
    )
}