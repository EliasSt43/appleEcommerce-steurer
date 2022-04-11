import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../FireBase';
import ItemsList from './ItemsList';
import './ItemsListContainer.css'

function ItemsListContainer (props){
    const {saludo}=props

    const [loading, setLoading] = useState(false)
    const [listItems, setListItems] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        setLoading(true)
        const coll = collection(db, 'Items')
        const q = categoriaId ? query(coll, where("categoria", "==", categoriaId)) : coll

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
       .finally(()=> setLoading(false))
    }, [categoriaId])

        return (
            <div>
                <h1 className="saludo">{saludo}</h1>
                <ItemsList loading={loading} listItems={listItems}/>
            </div>

            );
        }

export default ItemsListContainer;