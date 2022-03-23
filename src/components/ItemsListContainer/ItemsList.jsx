import { useEffect, useState } from 'react';
import './ItemsList.css'
import Items from "./Items";
import { getProducts } from '../../mock/stock';
import { useParams } from 'react-router-dom';



function ItemsList(){

    const [listProducts, setListProducts] = useState([]);

    const {categoriaId} = useParams();

    useEffect(()=>{
        getProducts
        .then((res) =>{
            if(!categoriaId){
                setListProducts(res)
            }else{
                setListProducts((res.filter((prod) => prod.categoria === categoriaId)))
            }
        })
        .catch((error)=> console.log(error))
    },[categoriaId])

    return(
        <section className="cont-img">
            {listProducts.map((productos)=> <Items productos={productos} key={productos.id}/>)}   
        </section>
        
    );
}

export default ItemsList;