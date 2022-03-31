import './CartWidget.css';
import { BsCart4 } from 'react-icons/bs';
import { CartContext } from './CartContext';
import { useContext } from 'react';


function CartWidget(){

    const carritoContext = useContext(CartContext);
    

    return (
        
        <div className='bs1'>
            <div className="bs">
                <BsCart4/>
                {
                (carritoContext.totalCount())>0 &&
                <span>
                    {carritoContext.totalCount()}
                </span>
            }
               
            </div>
        </div>
    );
}

export default CartWidget;