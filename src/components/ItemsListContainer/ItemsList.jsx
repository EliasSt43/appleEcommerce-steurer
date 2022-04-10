import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../FireBase';
import './ItemsList.css'
import Items from "./Items";



function ItemsList(){

    const [listItems, setListItems] = useState({});

    const {categoriaId} = useParams();

    useEffect(() => {
        const productosRef = collection(db, 'Items')
        const q = categoriaId ? query(productosRef, where("categoria", "==", categoriaId)) : productosRef

        getDocs(q)
        .then((resp) => {
            setListItems( resp.docs.map((doc) => {

                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
       .catch((error)=> console.log(error))
    }, [categoriaId])

    console.log('listItems', listItems)
    return(
        <section className="cont-img">
            <Items listItems={listItems}/>
        </section>
        
    );
}

export default ItemsList;