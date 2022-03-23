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
            <div className="two">
                <button onClick={incrementar} className="btn btn-dark suma">+</button>
            </div>
            <div className="two">
                <p className="valor">{num}</p>
            </div>
            <div className="two">
                <button onClick={decrementar} className="btn btn-dark suma">-</button>
            </div>
        </div>
    );
}

export default ItemsCount;