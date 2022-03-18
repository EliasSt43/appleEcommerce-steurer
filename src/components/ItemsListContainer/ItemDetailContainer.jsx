import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';



function ItemDetailContainer (){

    const [itemDetail, setItemDetail] = useState([])
    const productos = [
      {id:'1', name:'Appel Macbook Air', price:'$202.999', description:"CPU de 8 núcleos con un rendimiento hasta 3.5 veces más rápido para que puedas hacer de todo a una velocidad insuperable. 8 GB de memoria unificada para que todo sea más rápido y fluido. antalla Retina de 13.3 pulgadas con una amplia gama de colores P3 para que disfrutes imágenes vibrantes y un nivel de detalle increíble.", img:'https://www.stopandclick.es/wp-content/uploads/2021/11/macbook-pro-5342546_1280.png'},
      {id:'2', name:'Apple MacBook Pro', price:'$256.398', description:"(13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM)", img:'https://cdn.pixabay.com/photo/2020/06/26/13/20/macbook-pro-5342709_1280.png'},
      {id:'3', name:'Appel Macbook Pro', price:'$309.254', description:"(16 pulgadas, Chip M1 Pro de Apple, GPU de 16 núcleos, 16 GB RAM, 512 GB SSD)", img:'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SX522_.jpg'},
  ]

    const getItem = new Promise((resolve, reject)=>{
      if(productos){
        setTimeout(() => {
          resolve(productos)
        }, 0);
      }else{
        reject('Destalles de productos no cargados')
      }
    })

    useEffect(()=>{
        getItem
      .then((respuesta)=> setItemDetail(respuesta.find((item)=> item.id === '1')))
      .catch((error)=> console.log(error))
    },[])

    return (
        <div>
          <ItemDetail producto={itemDetail}/>
        </div>
    );
}

export default ItemDetailContainer;