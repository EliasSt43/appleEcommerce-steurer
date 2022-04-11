import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import {doc, getDoc} from 'firebase/firestore';
import { db } from '../../FireBase';
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'

function ItemDetailContainer (){

    const {itemId} = useParams();
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState({});


    useEffect(()=>{
      setLoading(true)
      const docs = doc(db, 'Items', itemId)
      getDoc(docs)
      .then((item)=> setItem({id:item.id, ...item.data()}))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    }, [])

    return (
        <div>
          {loading ? <div className='carga'><p className='car'>CARGANDO...</p></div> : <ItemDetail item={item}/> }
        </div>
    );
}

export default ItemDetailContainer;