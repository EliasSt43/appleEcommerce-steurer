import { useEffect, useState } from 'react';
import './ItemsList.css'
import Items from "./Items";
import { getProducts } from '../../mock/stock';
import { useParams } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';



function ItemsList({listItems}){

    const [listProducts, setListProducts] = useState([]);

    const {categoriaId} = useParams();

    useEffect(()=>{
        getDocs(listItems)
        .then((res) =>{
            if(!categoriaId){
                setListProducts(res.docs.map(doc=>{return {id: doc.id, ...doc.data()}}))
            }else{
                setListProducts((res.docs.map.filter((item) => item.categoria === categoriaId)))
            }
        })
        .catch((error)=> console.log(error))
    },[categoriaId])

    return(
        <section className="cont-img">
            {listProducts.map((productos)=> <Items productos={listItems} key={listItems.id}/>)}   
        </section>
        
    );
}

export default ItemsList;