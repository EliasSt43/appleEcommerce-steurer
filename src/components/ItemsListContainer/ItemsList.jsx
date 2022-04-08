import { useEffect, useState } from 'react';
import './ItemsList.css'
import Items from "./Items";
import { getProducts } from '../../mock/stock';
import { useParams } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';



function ItemsList({listItems}){

    const [listProducts, setListProducts] = useState([]);

    const {categoriaId} = useParams();

    
        getDocs(listItems)
        .then((listItems) =>{
            if(!categoriaId){
                setListProducts(listItems)
            }else{
                setListProducts((listItems.filter((prod) => prod.categoria === categoriaId)))
            }
        })
        .catch((error)=> console.log(error))
    

    return(
        <section className="cont-img">
            {listProducts.map((listItems)=> <Items productos={listItems} key={listItems.id}/>)}   
        </section>
        
    );
}

export default ItemsList;