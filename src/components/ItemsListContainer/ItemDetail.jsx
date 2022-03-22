
import './ItemDetail.css'


const ItemDetail = ({img, name, description, price}) =>{
    return(
        <section>
                <div className="cen">
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
                </div>
        </section>
    );
}

export default ItemDetail;