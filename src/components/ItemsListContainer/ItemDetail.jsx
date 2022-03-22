
import './ItemDetail.css'


const ItemDetail = ({id, img, description, price, name}) =>{
    return(
        <section>
                <di className="cen">
                    <div className="conte">
                        <img src={img} className="img" alt={name}/>
                        <div className="izq">
                            <h4 className="name">{name}</h4>
                            <p className='price'>${price}</p>
                            <div className="">
                                <a href="#" className="btn btn-primary botton">Añadir al carrito</a>
                                
                            </div>
                            <p className="des">{description}</p>
                        </div>
                    </div>
                </di>
        </section>
    );
}

export default ItemDetail;