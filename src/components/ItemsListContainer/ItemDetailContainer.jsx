import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../../FireBase';

function ItemDetailContainer (){

    const [item, setItem] = useState({})


    useEffect(()=>{
      const getData = async()=>{
        const query = collection(db, 'Items');
        const response = await getDocs(query);

        const dataItems = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}});
        setItem(dataItems);
      }
      getData();
    }, [])

    return (
        <div>
          <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;