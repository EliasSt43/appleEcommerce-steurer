


const ItemDetail = ({productos}) =>{
    return(
        <section>
            <div>
                <h1>Item detail</h1>
                <img src={productos.img} alt="macbook"/>
            </div>
        </section>
    );
}

export default ItemDetail;