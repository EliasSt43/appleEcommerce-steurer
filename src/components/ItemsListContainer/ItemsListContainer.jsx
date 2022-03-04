import React from "react";
import ItemsList from './ItemsList';
import './ItemsListContainer.css'

function ItemsListContainer (props){
    const {greeting}=props
    return (
        <div>
            <h1 class="saludo">{greeting}</h1>
            <ItemsList/>
        </div>
    );
}

export default ItemsListContainer;