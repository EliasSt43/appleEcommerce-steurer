import { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({children}) => {
    const [productosCarrito,setProductosCarrito] = useState([]);

    const addItem = (item, quantityToAdd) => {
        const newProduct = {
            item, 
            quantityToAdd
        }
        console.log('newProducto',newProduct)
        setProductosCarrito([...productosCarrito, newProduct])
    }

    const removeItem = (itemId) =>{

        const nuevosProductos = productosCarrito.filter(producto=>producto.item.id !== itemId);

        setProductosCarrito(nuevosProductos);
    }

    const clear = () => {
        setProductosCarrito([]);
    }

    const isInCart = (id) => {
        if(productosCarrito.item.id === id){
           return (productosCarrito.quantityToAdd + productosCarrito.quantityToAdd)
        } else{
            addItem()
        }   
    }
    
    return(
        <CartContext.Provider value={{productosCarrito, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}