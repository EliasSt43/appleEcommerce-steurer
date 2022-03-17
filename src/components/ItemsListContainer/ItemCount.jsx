import { useState } from "react";
import './ItemCount.css';

function ItemsCount(props){
    const {stock}=props;
    const [num, setNum] = useState(1);

    const incrementar = () =>{
        if(num < stock)
        setNum(num + 1);
    };

    const decrementar = () =>{
        if(num > 0){
        setNum(num - 1);
        }
    };

    return (
        <div id="num">
            <button onClick={incrementar} className="btn btn-dark suma">+</button>
                <p className="valor">{num}</p>
            <button onClick={decrementar} className="btn btn-dark suma">-</button>
        </div>
    );
}

export default ItemsCount;