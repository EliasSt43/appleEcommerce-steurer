import { useEffect, useState } from 'react';
import './ItemsList.css'
import Items from "./Items";


function ItemsList(){
    const [listProducts, setListProducts] = useState([]);
    const productos = [
        {id:'1', name:'Appel Macbook Air', price:'$202.999', description:"(13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM)"},
        {id:'2', name:'Apple MacBook Pro', price:'$296.398', description:"(13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM)"},
        {id:'3', name:'Appel Macbook Pro', price:'$309.254', description:"(16 pulgadas, Chip M1 Pro de Apple con CPU de 10 núcleos, GPU de 16 núcleos, 16 GB RAM, 512 GB SSD)"},
    ]

    const getProducts = new Promise((resolve, reject)=> {
        if(productos){
            setTimeout(()=>{
                resolve(productos)
            },2000)
        }else{
            reject('Productos no cargados')
        }
    })

    useEffect(()=>{
        getProducts
        .then((respuesta) => setListProducts(respuesta))
        .catch((error)=> console.log(error)) 
    },[])

    console.log(listProducts)

    return(
        <section className="cont-img">
            {listProducts.map((productos)=> <Items productos={productos} key={productos.id}/>)}   
        </section>
        
    );
}

export default ItemsList;