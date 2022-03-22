
import './ItemDetail.css'


const ItemDetail = ({producto}) =>{
    return(
        <section>
                <di className="cen">
                    <div className="conte">
                        <img src={producto.img} className="img" alt={producto.name}/>
                        <div className="izq">
                            <h4 className="name">{producto.name}</h4>
                            <p className='price'>${producto.price}</p>
                            <div className="">
                                <a href="#" className="btn btn-primary botton">Añadir al carrito</a>
                                
                            </div>
                            <p className="des">{producto.description}</p>
                        </div>
                    </div>
                </di>
        </section>
    );
}

export default ItemDetail;