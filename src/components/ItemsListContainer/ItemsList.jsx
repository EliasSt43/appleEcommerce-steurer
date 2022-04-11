
import './ItemsList.css'
import Items from "./Items";



function ItemsList({listItems, loading}){

    
    return(
        <>
        <section className="cont-img">
            {loading ? <div className='cargando'><p className='carga'>CARGANDO...</p></div> : listItems.map((item) => <Items item={item} key={item.id}/> )}
        </section>
        </>
    );
}

export default ItemsList;