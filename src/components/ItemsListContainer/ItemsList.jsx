import { useEffect, useState } from 'react';
import './ItemsList.css'
import Items from "./Items";
import iphone11 from '../img/iphone11.png';
import iphone11pro from '../img/iphone11Pro.png';
import iphone11promax from '../img/iphone11ProMax.png';
import reloj1 from '../img/reloj1.png';
import macbookpro16 from '../img/macbookpro16.png';
import macbookpro from '../img/macbookpro.png';
import macbookair from '../img/macbookair.png';
import iMac from '../img/iMac.png';
import iPad from '../img/iPad.png';
import iPadMini from '../img/iPadMini.png';
import iPadAir from '../img/iPadAir.png';
import iPadPro from '../img/iPadPro.png';
import AirPods from '../img/AirPods.png';
import AirPods3 from '../img/AirPods3.png';
import AirPodsPro from '../img/AirPodsPro.png';
import AirPodsMax from '../img/AirPodsMax.png';
import iphone12 from '../img/iphone12.png';
import iphone12promax from '../img/iphone12promax.png';
import iphone13 from '../img/iphone13.png';
import iphone13pro from '../img/iphone13pro.png';
import iphone13promax from '../img/iphone13promax.png';



function ItemsList(){

    const [listProducts, setListProducts] = useState([]);

    const productos = [
        {id:'1', name:'Appel Macbook Air', price: 202.999, description:"(13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM, etc)", img:macbookair, categoria:'Macbooks'},
        
        {id:'2', name:'Apple MacBook Pro', price: 256.398, description:"(13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM, etc)", img:macbookpro, categoria:'Macbooks'},
        
        {id:'3', name:'Appel Macbook Pro', price: 309.254, description:"(16 pulgadas, Chip M1 Pro de Apple, GPU de 16 núcleos, 16 GB RAM, 512 GB SSD, etc)", img:macbookpro16, categoria:'Macbooks'},
        
        {id:'4', name:'Iphone 11', price: 160.245, description:"(Pantalla de 6.1 pulgadas, Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular), Chip A13 Bionic c, iOS 14, etc)", img:iphone11, categoria:'Iphone'},
        
        {id:'5', name:'Iphone 11 Pro', price: 242.984, description:"(Pantalla de 5.8 pulgadas, Chip A13 Bionic, Cámara delantera de 12Mpx, Tres cámaras traseras: ultra gran angular, gran angular y teleobjetivo, etc)", img:iphone11pro, categoria:'Iphone'},
        
        {id:'6', name:'Iphone 11 Pro Max', price: 312.658, description:"(Pantalla de 6.5 pulgadas, Tres cámaras traseras: ultra gran angular, gran angular y teleobjetivo, Chip A13 Bionic, etc)", img:iphone11promax, categoria:'Iphone'},
        
        
        {id:'7', name:'Appel Watch', price: 65.963, description:"(Pantalla Retina con la información más importante a la vista, Mide entrenamientos como correr, caminar, bailar, nadar, Chip S3 con procesador de doble núcle, etc)", img:reloj1, categoria:'AppelWatch'},
        
        {id:'8', name:'iMac', price: 387.671, description:"(Chip M1 que integra en un solo lugar el procesador, 24 pulgadas para disfrutar con un máximo nivel de detalle, Cámara FaceTime HD de 1080p9, etc)", img:iMac, categoria:'iMac'},
        
        {id:'9', name:'iPad', price: 169.795, description:"(Increíble pantalla de 10.2 pulgadas, Chip A13 Bionic , Cámara trasera gran angular de 8 MP y cámara frontal ultra gran angular de 12 MP con Encuadre Centrado, etc)", img:iPad, categoria:'iPad'},
        
        {id:'10', name:'iPad Mini', price: 112.135, description:"(Pantalla de 8.3 pulgadas, Chip A15 Bionic, Cámara de 12 MP y cámara frontal 12 MP, iPadOS 15, etc)", img:iPadMini, categoria:'iPad'},
        
        {id:'11', name:'iPad Air', price: 134.489, description:"(Pantalla de 10,9 pulgadas, Chip A14 Bionic, Cámara trasera de 12 MP y cámara frontal de 7 MP, iPadOS 14, etc)", img:iPadAir, categoria:'iPad'},
        
        {id:'12', name:'iPad Pro', price: 194.143, description:"(Chip M1, pantalla de 11 pulgadas, Cámara gran angular de 12 MP, cámara ultra gran angular de 10 MP y escáner LiDAR, etc)", img:iPadPro, categoria:'iPad'},
        
        {id:'13', name:'Air Pods', price: 22.541, description:"(Ajuste universal para usarlos con comodidad todo el día, Activación y conexión automática, Estuche de carga para disfrutar más de 24 horas de batería, etc)", img:AirPods, categoria:'AirPods'},
        
        {id:'14', name:'Air Pods (3° Generación)', price: 37.369, description:"(Audio espacial con seguimiento dinámico de la cabeza para un sonido envolvente, Hasta 6 horas de audio con una sola carga, etc)", img:AirPods3, categoria:'AirPods'},
        
        {id:'15', name:'Air Pods Pro', price: 52.472, description:"(Su diseño a medida se ajusta a la forma del oido y ofrece un aislamiento ideal para la cancelación activa de ruido, etc)", img:AirPodsPro, categoria:'AirPods'},
        
        {id:'16', name:'Air Pods Max', price: 103.462, description:"(Controlador dinámico diseñado por Apple para un sonido de alta fidelidad, Audio computacional que combina un diseño acústico con el chip H1 y el software de Apple, etc)", img:AirPodsMax, categoria:'AirPods'},
        
        {id:'17', name:'Iphone 12', price: 242.452, description:"(Pantalla Super Retina XDR de 6.1 pulgadas, Chip M14 Pro de Apple, Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), iOS 14, etc)", img:iphone12, categoria:'Iphone'},
        
        {id:'18', name:'Iphone 12 Pro Max', price: 419.452, description:"(Pantalla de 6.7 pulgadas, Chip A14 Bionic, Sistema de cámaras Pro de 12 MP (ultra gran angular, gran angular y teleobjetivo),iOS 14, etc)", img:iphone12promax, categoria:'Iphone'},
        
        {id:'19', name:'Iphone 13', price: 265.552, description:"(Pantalla de 6.1 pulgadas, Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular), Chip A15 Bionic, iOS 15, Memoria RAM de 4 GB, etc)", img:iphone13, categoria:'Iphone'},
        
        {id:'20', name:'Iphone 13 Pro', price: 321.952, description:"(Pantalla de 6.1 pulgadas, Chip A15 Bionic, Hasta 1 TB de memoria interna, iOS 15, Nuevo sistema de cámaras Pro de 12 MP, etc)", img:iphone13pro, categoria:'Iphone'},
        
        {id:'21', name:'Iphone 13 Pro Max', price: 547.352, description:"(Pantalla de 6.7 pulgadas, Chip A15 Bionic, iOS 15, sistema de cámaras Pro de 12 MP (teleobjetivo, gran angular y ultra gran angular), etc)", img:iphone13promax, categoria:'Iphone'},
    ]

    const getProducts = new Promise((resolve, reject)=> {
        if(productos){
            setTimeout(()=>{
                resolve(productos)
            },2000)
        }else{
            reject('Productos no cargados')
        }
    })

    useEffect(()=>{
        getProducts
        .then((res) => setListProducts(res))
        .catch((error)=> console.log(error))
    },[])

    return(
        <section className="cont-img">
            {listProducts.map((productos)=> <Items productos={productos} key={productos.id}/>)}   
        </section>
        
    );
}

export default ItemsList;