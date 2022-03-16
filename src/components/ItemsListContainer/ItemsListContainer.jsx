
import ItemsList from './ItemsList';
import './ItemsListContainer.css'

function ItemsListContainer (props){
    const {saludo}=props

    return (
        <div>
            <h1 className="saludo">{saludo}</h1>
            <ItemsList/>
        </div>
    );
}

export default ItemsListContainer;