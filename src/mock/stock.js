const productos = [
    {id: '1', name:'Appel Macbook Air', price: 202.999, description:"(13 pulgadas, 2020, Chip M1, hasta 512 GB de SSD y 8 GB de RAM)", img:'/img/macbookair.png', categoria:'Macbook', stock:'3'},

    {id: '2', name:'Apple MacBook Pro', price: 256.398 , description:"(13 pulgadas, 2020, Chip M1, hasta 1 TB de SSD y 16 GB de RAM)", img:'/img/macbookpro.png', categoria:'Macbook', stock:'5'},

    {id: '3', name:'Appel Macbook Pro', price: 309.254, description:"(16 pulgadas, Chip M1 Max de Apple con CPU de 10 núcleos, hasta 32 GB RAM y 1 TB SSD)", img:'/img/macbookpro16.png', categoria:'Macbook', stock:'7'},

    {id: '4', name:'Iphone 11', price: 160.245, description:"(Pantalla HD de 6.1 pulgadas, Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular), Chip A13, iOS 14 con, Memoria RAM de 4 GB y hasta 256 GB de memoria)", img:'/img/iphone11.png', categoria:'Iphone', stock:'13'},
      
    {id: '5', name:'Iphone 11 Pro', price: 242.984, description:"(Pantalla de 5.8 pulgadas, Chip A13, Cámara delantera de 12Mpx, Tres cámaras traseras: ultra gran angular, gran angular y teleobjetivo, Memoria RAM de 4 GB y hasta 512 GB de memoria)", img:'/img/iphone11pro.png', categoria:'Iphone', stock:'16'},
    
    {id: '6', name:'Iphone 11 Pro Max', price: 312.658, description:"(Pantalla OLED de 6.5 pulgadas, Tres cámaras traseras: ultra gran angular, gran angular y teleobjetivo, Chip A13, Memoria RAM de 4 GB y hasta 512 GB de memoria)", img:'/img/iphone11promax.png', categoria:'Iphone', stock:'2'},
    
    {id: '7', name:'Appel Watch', price: 65.963, description:"(Notificaciones de frecuencia cardiaca alta y baja, Sincroniza tu música y podcasts favoritos, Mide entrenamientos como correr, caminar, bailar, nadar, hacer yoga o andar en bicicleta, Chip S3 con procesador de doble núcle", img:'/img/reloj1.png', categoria:'Appelwatch', stock:'9'},
    
    {id: '8', name:'iMac', price: 387.671, description:"(Chip M1, 24 pulgadas para disfrutar con un máximo nivel de detalle, Cámara FaceTime HD de 1080p, Micrófonos con calidad de estudio, Sistema de sonido de seis bocinas, Memoria RAM de 8 GB y 512 GB de memoria)", img:'/img/iMac.png', categoria:'Imac', stock:'8'},
    
    {id: '9', name:'iPad', price: 169.795, description:"(Pantalla de 10.2 pulgadas, Chip A13, Cámara trasera gran angular de 8 MP y cámara frontal de 12 MP con Encuadre Centrado, Hasta 10 horas de batería, iPadOS 15, Memoria RAM de 4 GB y hasta 256 GB de memoria)", img:'/img/iPad.png', categoria:'Ipad', stock:'35'},
    
    {id: '10', name:'iPad Mini', price: 112.135, description:"(Pantalla de 8.3 pulgadas, Chip A15, Cámara trasera gran angular de 12 MP y cámara frontal de 12 MP, Hasta 10 horas de batería, iPadOS 15, Memoria RAM de 4 GB y hasta 256 GB de memoria)", img:'/img/iPadMini.png', categoria:'Ipad', stock:'4'},
    
    {id: '11', name:'iPad Air', price: 134.489, description:"(Pantalla de 10,9 pulgadas, Chip A14, Cámara trasera de 12 MP y cámara frontal de 7 MP, iPadOS 14 , Memoria RAM de 4 GB y hasta 256 GB de memoria)", img:'/img/iPadAir.png', categoria:'Ipad', stock:'6'},
    
    {id: '12', name:'iPad Pro', price: 194.143, description:"(Chip M1, Increíble pantalla de 11 pulgadas, Cámara gran angular de 12 MP, cámara ultra gran angular de 10 MP, Una batería que te acompaña todo el día, Memoria RAM de 16 GB y hasta 2 TB de memoria)", img:'/img/iPadPro.png', categoria:'Ipad', stock:'17'},
    
    {id: '13', name:'Air Pods', price: 22.541, description:"(Los AirPods te brindan una experiencia inalámbrica inigualable con un sonido de alta calidad, acceso a Siri, activado por voz y un estuche de carga que te ofrece más de 24 horas de reproducción de audio, se conecta al instante para que disfrutes un sonido de alta calidad)", img:'/img/AirPods.png', categoria:'Airpods', stock:'5'},
    
    {id: '14', name:'Air Pods (3° Generación)', price: 37.369, description:"(Audio espacial con seguimiento dinámico de la cabeza para un sonido envolvente, Resistencia al agua y al sudor, Hasta 6 horas de audio con una sola carga y Hasta 30 horas de audio en total con el estuche de carga MagSafe)", img:'/img/AirPods3.png', categoria:'Airpods', stock:'9'},
    
    {id: '15', name:'Air Pods Pro', price: 52.472, description:"(Ofrece un aislamiento ideal para la cancelación activa de ruido, Las almohadillas de silicón vienen en tres tamaños, Además, tienen orificios de ventilación, chip H1 trabajan juntos a la perfección para producir un sonido excepcional en un diseño compacto )", img:'/img/AirPodsPro.png', categoria:'Airpods', stock:'23'},
    
    {id: '16', name:'Air Pods Max', price: 103.462, description:"(Controlador dinámico diseñado por Apple, Cancelación Activa de Ruido, Audio computacional que combina un diseño acústico con el chip H1 y el software de Apple para brindar un sonido revolucionario, 20 horas de audio, reproducción de video y llamadas)", img:'/img/AirPodsMax.png', categoria:'Airpods', stock:'18'},
    
    {id: '17', name:'Iphone 12', price: 242.452, description:"(Pantalla de 6.1 pulgadas, Chip M14 Pro de Apple, Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), Memoria RAM de 4 GB y hasta 256 GB, iOS 14, nueva Biblioteca de Apps, App Clips, y mucho más.)", img:'/img/iphone12.png', categoria:'Iphone', stock:'20'},
    
    {id: '18', name:'Iphone 12 Pro Max', price: 419.452, description:"(Pantalla de 6.7 pulgadas, Chip A14 Bionic, Memoria RAM de 6 GB y hasta 512 GB de memoria interna, Sistema de cámaras Pro de 12 MP (ultra gran angular, gran angular y teleobjetivo), iOS 14 (pantalla de inicio, nueva Biblioteca de Apps, App Clips y mucho más )", img:'/img/iphone12promax.png', categoria:'Iphone', stock:'1'},
    
    {id: '19', name:'Iphone 13', price: 265.552, description:"(Pantalla 6.1 pulgadas, Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos,  Chip A15 Bionic para un rendimiento fuera de serie, iOS 15, Memoria RAM de 4 GB y hasta 512 GB de memoria interna)", img:'/img/iphone13.png', categoria:'Iphone', stock:'7'},
    
    {id: '20', name:'Iphone 13 Pro', price: 321.952, description:"(Pantalla 6.1 pulgadas, Chip A15 Bionic para un rendimiento fuera de serie, Memoria RAM de 6 GB y hasta 1 TB de memoria interna, iOS 15, Nuevo sistema de cámaras Pro de 12 MP (teleobjetivo, gran angular y ultra gran angular))", img:'/img/iphone13pro.png', categoria:'Iphone', stock:'5'},
    
    {id: '21', name:'Iphone 13 Pro Max', price: 547.352, description:"(Pantalla de 6.7 pulgadas, Chip A15 Bionic, Memoria RAM de 6 GB y hasta 1 TB de memoria interna, iOS 15, cámaras Pro de 12 MP (teleobjetivo, gran angular y ultra gran angular))", img:'/img/iphone13promax.png', categoria:'Iphone', stock:'3'},

]

export const getProducts = new Promise((resolve, reject)=> {
    if(productos){
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }else{
        reject('Productos no cargados')
    }
  })