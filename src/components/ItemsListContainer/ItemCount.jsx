import { useState } from "react";
import './ItemCount.css';

function ItemsCount(){
    const [num, setNum] = useState(0);

    const incrementar = () =>{
        setNum(num + 1);
    };

    const decrementar = () =>{
        setNum(num - 1);
    };

    return (
        <div id="num">
            <button onClick={incrementar} class="btn btn-secondary suma">+</button>
                <p class="valor">{num}</p>
            <button onClick={decrementar} class="btn btn-secondary suma">-</button>
        </div>
    );
}

export default ItemsCount;