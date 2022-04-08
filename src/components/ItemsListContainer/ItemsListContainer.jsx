import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../FireBase';
import ItemsList from './ItemsList';
import './ItemsListContainer.css'

function ItemsListContainer (){

    const [listItems, setListItems] = useState({});

    const {categoriaId} = useParams();

    useEffect( () => {
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
    console.log('items', listItems);

        return (
            <div className="cont-img">
                <ItemsList listItems={listItems}/>
            </div>

            );
        }

export default ItemsListContainer;