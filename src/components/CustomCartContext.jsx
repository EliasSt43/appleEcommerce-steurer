import { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({children}) => {
    const [productosCarrito,setProductosCarrito] = useState([]);

    const addItem = (item, quantityToAdd) => {
        if(isInCart(item.id)){
            const newProducts = [...productosCarrito];
            const porductIndex = productosCarrito.findIndex(prod => prod.item.id === item.id);
            newProducts[porductIndex].quantityToAdd = newProducts[porductIndex].quantityToAdd + quantityToAdd;

            setProductosCarrito(newProducts)
        }else{
            const newProduct = {
                item,
                quantityToAdd
            }

            setProductosCarrito([...productosCarrito, newProduct]);
        }
    }

    const removeItem = (itemId) =>{

        const nuevosProductos = productosCarrito.filter(producto=>producto.item.id !== itemId);

        setProductosCarrito(nuevosProductos);
    }

    const clear = () => {
        setProductosCarrito([]);
    }

    const isInCart = (id) => {
          return productosCarrito.some(productos=>productos.item.id === id);
    }

    const totalCount = () =>{
        const total = productosCarrito.reduce((acc,item)=> acc + item.quantityToAdd,0);
        return total;
    }

    const getTotalPrice = ()=>{
        const totalPrice = productosCarrito.reduce((acc,prod)=>acc+(prod.quantityToAdd*prod.item.price),0)
        return totalPrice;
    }
    
    return(
        <CartContext.Provider value={{productosCarrito, addItem, removeItem, clear, isInCart, totalCount, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}