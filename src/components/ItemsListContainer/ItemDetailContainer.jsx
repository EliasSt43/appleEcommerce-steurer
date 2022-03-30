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
import { useParams } from "react-router-dom";
import { getProducts } from "../../mock/stock";


function ItemDetailContainer (){

    const [item, setItem] = useState({})

    const {itemId} = useParams()

    useEffect(()=>{
      getProducts
      .then((res)=> {
        setItem(res.find((prod)=> prod.id === itemId))
      }, 0)
    }, [])

    return (
        <div>
          <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;