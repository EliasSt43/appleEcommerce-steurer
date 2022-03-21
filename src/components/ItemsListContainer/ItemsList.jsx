import { useEffect, useState } from 'react';
import './ItemsList.css'
import Items from "./Items";



function ItemsList(){

    const [listProducts, setListProducts] = useState([]);
    const productos = [
        {id:'1', name:'Appel Macbook Air', price:'$202.999', description:"(13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM)", img:'https://www.stopandclick.es/wp-content/uploads/2021/11/macbook-pro-5342546_1280.png'},
        {id:'2', name:'Apple MacBook Pro', price:'$256.398', description:"(13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM)", img:'https://cdn.pixabay.com/photo/2020/06/26/13/20/macbook-pro-5342709_1280.png'},
        {id:'3', name:'Appel Macbook Pro', price:'$309.254', description:"(16 pulgadas, Chip M1 Pro de Apple, GPU de 16 núcleos, 16 GB RAM, 512 GB SSD)", img:'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SX522_.jpg'},
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