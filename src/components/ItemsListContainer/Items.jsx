import './Items.css';
import mac from './img/mac.png';
import ItemCount from './ItemCount';

const Item = ({productos}) =>{

    return(
        <section>
            <button type="button" className="btn borde" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className="margen">
                    <figure>
                        <img className="imgSection-1" src={mac} alt="Mac"/>
                        <div className="open">
                            <p className="p">Vista previa</p>
                        </div>
                    </figure>
                </div>
            </button>
            <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content btn btn-light">
                                <div className="modal-header">
                                <p className="modal-title" id="staticBackdropLabel">{productos.name}</p>
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">X</button>
                                </div>
                                <div className="modal-body">

                                    <div className="carousel-inner">
                                        <div>
                                            <img className="imgSection-2" src={mac} alt="Macbook" />
                                        </div>
                                    </div>
                                        <p className="precio">{productos.price}</p>
                                        <p className="precio">{productos.description}</p>
                                
                                    <div className="modal-footer footer">
                                       <ItemCount stock="5"/>
                                        <a className="boton" href="../pages-of-product/pedido.html"><button type="button" className="btn btn-primary">Añadir al carrito</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
        
    );
}

export default Item;