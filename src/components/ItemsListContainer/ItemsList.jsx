import './Items.css';
import mac from './img/mac.png';
import mac2 from './img/mac.jpg';
import mac3 from './img/macbook.jpg';
import mac4 from './img/mac4.png';
import mac5 from './img/mac5.jpg';
import mac6 from './img/mac6.jpg';
import mac7 from './img/mac7.jpg';
import mac8 from './img/mac 8.png';
import mac9 from './img/mac9.jpg';
import ItemCount from './ItemCount';

function Items(){

    return(
        <section class="cont-img">
            <button type="button" class="btn borde" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div class="margen">
                    <figure>
                        <img class="imgSection-1" src={mac} alt="Mac"/>
                        <div class="open">
                            <p class="p">Vista previa</p>
                        </div>
                    </figure>
                </div>
            </button>
            <div class="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content btn btn-light">
                                <div class="modal-header">
                                <p class="modal-title" id="staticBackdropLabel">Appel Macbook Air</p>
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">X</button>
                                </div>
                                <div class="modal-body">
                                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="imgSection-2" src={mac} alt="Macbook" />
                                        </div>       
                                        <div class="carousel-item">
                                        <img class="imgSection-2" src={mac2} alt="Tecado macbook" />  
                                        </div>
                                        <div class="carousel-item">
                                        <img class="imgSection-2" src={mac3} alt="Tecado macbook" />  
                                        </div>
                                    </div>
                                        <p class="precio">$202.999</p>
                                        <p class="precio">(13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM)</p>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div class="modal-footer footer">
                                       <ItemCount/>
                                        <a class="boton" href="../pages-of-product/pedido.html"><button type="button" class="btn btn-primary">Añadir al carrito</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            <button type="button" class="btn borde" data-bs-toggle="modal" data-bs-target="#model2">
                <div class="margen">
                    <figure>
                        <img class="imgSection-1" src={mac4} alt="Mac"/>
                        <div class="open">
                            <p class="p">Vista previa</p>
                        </div>
                    </figure>
                </div>
            </button>
            <div class="modal fade" id="model2" tabindex="-1" aria-labelledby="static2" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content btn btn-light">
                                        <div class="modal-header">
                                        <p class="modal-title" id="static2">Apple MacBook Pro </p>
                                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">X</button> 
                                        </div>
                                    <div class="modal-body">
                                                <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img class="imgSection-2" src={mac4} alt="Macbook "/>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="imgSection-2" src={mac5} alt="Mavbook parte de atras"/>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img class="imgSection-2" src={mac6} alt="Mavbook"/>
                                                        </div>
                                                    </div>
                                                    <p class="precio">$296.398</p>
                                                    <p class="precio">(13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM)</p>
                                                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                </div>
                                        <div class="modal-footer footer">
                                            <ItemCount/>
                                            <a class="boton" href="../pages-of-product/pedido.html"><button type="button" class="btn btn-primary">Añadir al Carrito</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

            <button type="button" class="btn borde" data-bs-toggle="modal" data-bs-target="#model3">
                <div class="margen">
                    <figure>
                        <img class="imgSection-1" src={mac8} alt="Mac"/>
                        <div class="open">
                            <p class="p">Vista previa</p>
                        </div>
                    </figure>
                </div>
            </button>
            <div class="modal fade" id="model3" tabindex="-1" aria-labelledby="static3" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content btn btn-light">
                            <div class="modal-header">
                                <p class="modal-title" id="static3">Appel Macbook Pro</p>
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal" aria-label="Close">X</button>
                            </div>
                            <div class="modal-body">
                            <div id="carousel3" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="imgSection-2" src={mac8} alt="Macbook" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="imgSection-2" src={mac7} alt="Macbook" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="imgSection-2" src={mac9} alt="Macbook" />
                                        </div>
                                    </div>
                                    <p class="precio">$309.254</p>
                                    <p class="precio">(16 pulgadas, Chip M1 Pro de Apple con CPU de 10 núcleos, GPU de 16 núcleos, 16 GB RAM, 512 GB SSD)</p>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="modal-footer footer">
                                    <ItemCount/>
                                    <a class="boton" href="../pages-of-product/pedido.html"><button type="button" class="btn btn-primary">Añadir al Carrito</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        
    );
}

export default Items;