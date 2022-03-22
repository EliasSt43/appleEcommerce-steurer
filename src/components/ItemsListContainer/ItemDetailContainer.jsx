import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
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



function ItemDetailContainer (){

    const [itemDetail, setItemDetail] = useState([])
    const productos = [
      {id:'1', name:'Appel Macbook Air', price: 202.999, description:"CPU de 8 núcleos con un rendimiento hasta 3.5 veces más rápido para que puedas hacer de todo a una velocidad insuperable. 8 GB de memoria unificada para que todo sea más rápido y fluido. antalla Retina de 13.3 pulgadas con una amplia gama de colores P3 para que disfrutes imágenes vibrantes y un nivel de detalle increíble.", img:macbookair, categoria:""},

      {id:'2', name:'Apple MacBook Pro', price: 256.398 , description:"(13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM)", img:macbookpro},

      {id:'3', name:'Appel Macbook Pro', price: 309.254, description:"(16 pulgadas, Chip M1 Pro de Apple, GPU de 16 núcleos, 16 GB RAM, 512 GB SSD)", img:macbookpro16},

      {id:'4', name:'Iphone 11', price: 160.245, description:"Pantalla LCD Liquid Retina HD de 6.1 pulgadas, Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con modo Noche, modo Retrato y video 4K de hasta 60 cps, Chip A13 Bionic con Neural Engine de tercera generación, iOS 14 con widgets rediseñados en la pantalla de inicio, nueva Biblioteca de Apps, App Clips y mucho más, Memoria RAM de 4 GB y hasta 256 GB de memoria interna", img:iphone11},
        
      {id:'5', name:'Iphone 11 Pro', price: 242.984, description:"Pantalla OLED de 5.8 con colores increíblemente reales, Chip A13 Bionic para hacer todo de forma más rápida y fluida, Cámara delantera TrueDepth de 12Mpx. con modo retrato y control de profundidad, Tres cámaras traseras: ultra gran angular, gran angular y teleobjetivo, Memoria RAM de 4 GB y hasta 512 GB de memoria interna", img:iphone11pro},
      
      {id:'6', name:'Iphone 11 Pro Max', price: 312.658, description:"Pantalla OLED de 6.5 con colores increíblemente reales, Tres cámaras traseras: ultra gran angular, gran angular y teleobjetivo, Chip A13 Bionic para hacer todo de forma más rápida y fluida, Resiste bajo el agua hasta 30 minutos en una profundidad máxima de 4 metros (IP68, Memoria RAM de 4 GB y hasta 512 GB de memoria interna", img:iphone11promax},
      
      
      {id:'7', name:'Appel Watch', price: 65.963, description:"Pantalla Retina con la información más importante a la vista, Notificaciones de frecuencia cardiaca alta y baja, Sincroniza tu música y podcasts favoritos, Mide entrenamientos como correr, caminar, bailar, nadar, hacer yoga o andar en bicicleta, Chip S3 con procesador de doble núcle", img:reloj1},
      
      {id:'8', name:'iMac', price: 387.671, description:"Chip M1 que integra en un solo lugar el procesador, los gráficos, la memoria y mucho más, 24 pulgadas para disfrutar con un máximo nivel de detalle, Cámara FaceTime HD de 1080p, Micrófonos con calidad de estudio, Sistema de sonido de seis bocinas, Memoria RAM de 8 GB y 512 GB de memoria interna", img:iMac},
      
      {id:'9', name:'iPad', price: 169.795, description:"Increíble pantalla Retina de 10.2 pulgadas con True Tone, Chip A13 Bionic con Neural Engine, Cámara trasera gran angular de 8 MP y cámara frontal ultra gran angular de 12 MP con Encuadre Centrado, Hasta 10 horas de batería, iPadOS 15 es tan poderoso como fácil de usar y está diseñado para la versatilidad del iPad, Memoria RAM de 4 GB y hasta 256 GB de memoria interna", img:iPad},
      
      {id:'10', name:'iPad Mini', price: 112.135, description:"Pantalla Liquid Retina de 8.3 pulgadas, Chip A15 Bionic con Neural Engine, Cámara trasera gran angular de 12 MP y cámara frontal ultra gran angular de 12 MP con Encuadre Centrado, Hasta 10 horas de batería, iPadOS 15 es tan poderoso como fácil de usar y está diseñado para la versatilidad del iPad, Memoria RAM de 4 GB y hasta 256 GB de memoria interna", img:iPadMini},
      
      {id:'11', name:'iPad Air', price: 134.489, description:"Increíble pantalla Liquid Retina de 10,9 pulgadas, Chip A14 Bionic con Neural Engine, Cámara trasera de 12 MP y cámara frontal FaceTime HD de 7 MP, Hasta 10 horas de batería, iPadOS 14 tiene nuevas funcionalidades diseñadas especialmente para el iPad, Memoria RAM de 4 GB y hasta 256 GB de memoria interna", img:iPadAir},
      
      {id:'12', name:'iPad Pro', price: 194.143, description:"Chip M1 de Apple para un rendimiento fuera de serie, Increíble pantalla Liquid Retina de 11 pulgadas, Cámara gran angular de 12 MP, cámara ultra gran angular de 10 MP y escáner LiDAR para experiencias de realidad aumentada envolventes, Una batería que te acompaña todo el día, Memoria RAM de 16 GB y hasta 2 TB de memoria interna", img:iPadPro},
      
      {id:'13', name:'Air Pods', price: 22.541, description:"Ajuste universal para usarlos con comodidad todo el día, Activación y conexión automática, Estuche de carga para disfrutar más de 24 horas de batería", img:AirPods},
      
      {id:'14', name:'Air Pods (3° Generación)', price: 37.369, description:"Audio espacial con seguimiento dinámico de la cabeza para un sonido envolvente, Resistencia al agua y al sudor, Hasta 6 horas de audio con una sola carga, Hasta 30 horas de audio en total con el estuche de carga MagSafe", img:AirPods3},
      
      {id:'15', name:'Air Pods Pro', price: 52.472, description:"Su diseño a medida se ajusta a la forma del oido y ofrece un aislamiento ideal para la cancelación activa de ruido, Las almohadillas de silicón vienen en tres tamaños para adaptarse a tu oído y brindarte un ajuste cómodo. Además, tienen orificios de ventilación que ecualizan la presión en ambos lados de los audífonos, un amplificador de alto rango dinámico y el chip H1 trabajan juntos a la perfección para producir un sonido excepcional en un diseño compacto ", img:AirPodsPro},
      
      {id:'16', name:'Air Pods Max', price: 103.462, description:"Controlador dinámico diseñado por Apple para un sonido de alta fidelidad, Cancelación Activa de Ruido que bloquea el ruido exterior, Audio computacional que combina un diseño acústico con el chip H1 y el software de Apple para brindar un sonido revolucionario, 20 horas de audio, reproducción de video y llamadas", img:AirPodsMax},
      
      {id:'17', name:'Iphone 12', price: 242.452, description:"Pantalla Super Retina XDR de 6.1 pulgadas, Chip M14 Pro de Apple, Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), Memoria RAM de 4 GB y hasta 256 GB, iOS 14 con widgets rediseñados en la pantalla de inicio, nueva Biblioteca de Apps, App Clips, y mucho más.", img:iphone12},
      
      {id:'18', name:'Iphone 12 Pro Max', price: 419.452, description:"Pantalla Super Retina XDR de 6.7 pulgadas, Chip A14 Bionic, Memoria RAM de 6 GB y hasta 512 GB de memoria interna, el más rápido en un smartphone, Sistema de cámaras Pro de 12 MP (ultra gran angular, gran angular y teleobjetivo), rango de zoom óptico de 5x, modo Noche, Deep Fusion, HDR Inteligente 3, Apple ProRAW y grabación de video 4K HDR en Dolby Vision,iOS 14 con widgets rediseñados en la pantalla de inicio, nueva Biblioteca de Apps, App Clips y mucho más )", img:iphone12promax},
      
      {id:'19', name:'Iphone 13', price: 265.552, description:"Pantalla Super Retina XDR de 6.1 pulgadas, Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision, Chip A15 Bionic para un rendimiento fuera de serie, iOS 15 con nuevas funcionalidades para aprovechar tu iPhone al máximo, Memoria RAM de 4 GB y hasta 512 GB de memoria interna", img:iphone13},
      
      {id:'20', name:'Iphone 13 Pro', price: 321.952, description:"Pantalla Super Retina XDR de 6.1 pulgadas con ProMotion que brinda una respuesta más rápida y fluida, Chip A15 Bionic para un rendimiento fuera de serie, Memoria RAM de 6 GB y hasta 1 TB de memoria interna, iOS 15 con nuevas funcionalidades para aprovechar tu iPhone al máximo, Nuevo sistema de cámaras Pro de 12 MP (teleobjetivo, gran angular y ultra gran angular)", img:iphone13pro},
      
      {id:'21', name:'Iphone 13 Pro Max', price: 547.352, description:"Pantalla Super Retina XDR de 6.7 pulgadas con ProMotion que brinda una respuesta más rápida y fluida., Chip A15 Bionic para un rendimiento fuera de serie, Memoria RAM de 6 GB y hasta 1 TB de memoria interna, iOS 15 con nuevas funcionalidades para aprovechar tu iPhone al máximo., Nuevo sistema de cámaras Pro de 12 MP (teleobjetivo, gran angular y ultra gran angular), escáner LiDAR, rango de zoom óptico de 6x, fotografía macro, Estilos Fotográficos, video ProRes3, HDR Inteligente 4, modo Noche, Apple ProRAW y grabación de video 4K HDR en Dolby Vision.", img:iphone13promax},

  ]

    const getItem = new Promise((resolve, reject)=>{
      if(productos){
        setTimeout(() => {
          resolve(productos)
        }, 0);
      }else{
        reject('Destalles de productos no cargados')
      }
    })

    useEffect(()=>{
        getItem
      .then((res)=> setItemDetail(res.find((el)=> el.id === '1')))
      .catch((error)=> console.log(error))
    },[])

    return (
        <div>
          <ItemDetail producto={itemDetail}/>
        </div>
    );
}

export default ItemDetailContainer;