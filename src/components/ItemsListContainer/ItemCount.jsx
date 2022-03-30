
import './ItemCount.css';

function ItemsCount({stock, cantidad, setCantidad, contAgregar}){
    
    const incrementar = () =>{
        if(cantidad < stock)
        setCantidad(cantidad + 1);
    };

    const decrementar = () =>{
        if(cantidad > 0){
        setCantidad(cantidad - 1);
        }
    };

    return (
        <>
        <div id="num">
            <div className="two">
                <button onClick={incrementar} className="btn btn-dark suma">+</button>
            </div>
            <div className="two">
                <p className="valor">{cantidad}</p>
            </div>
            <div className="two">
                <button onClick={decrementar} className="btn btn-dark suma">-</button>
            </div>
            <br />
        </div>
        
            <button className="btn btn-primary botton" onClick={()=> {contAgregar(cantidad)}}>Añadir al carrito</button>
        
        </>
    );
}

export default ItemsCount;