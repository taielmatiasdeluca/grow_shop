import { useFetch } from "../hooks/useFetch";

//Custom Component
import { QuantityControl } from "./QuantityControl";

import { useCart } from "react-use-cart";


//Css
import './producto.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
//Context
import { GrowContext } from '../growContext';
import { useContext, useState } from "react";

import { useParams } from "react-router-dom";

function Producto(){
    const {token} = useParams();

    const { 
        addItem,
        inCart,
        items,
        updateItemQuantity,
        getItem
     } = useCart();

    const [quantity,setQuantity] = useState(1);

    const {
        apiUrl,
        openCart,
        closeLoader
    } = useContext(GrowContext);



    const { data } = useFetch(`${apiUrl}producto/getProduct/${token}`)

    if(data ){
        closeLoader();
    }



    return <PhotoProvider>
        <div id="producto">
            <div className="images">
                <div className="image_container">
                    {data?.info && (
                    <PhotoView src={`${apiUrl}${data.info.img}`} >
                        <img src={`${apiUrl}${data.info.img}`} alt="" />
                    </PhotoView>
                    )}
                        
                
                </div>
                <div className="secondary_photos">
                    {data?.images.map(image =><PhotoView src={`${apiUrl}${image.img}`}>
                            <img src={`${apiUrl}${image.img}`} />
                        </PhotoView>
                    )}
                </div>
            </div>
           

            <div className="info">
                <div className="title">
                    {data?.info.titulo}
                </div>
                <div className="price">
                    ${data?.info.precio}
                </div>
           
                <div className="controls">
                    <QuantityControl value={quantity} setValue={setQuantity} />
                    <button onClick={()=>{
                        if(!inCart(data.info.token)){
                            addItem({
                                id:data.info.token,
                                name:data.info.titulo,
                                price:data.info.precio,
                                img:data.info.img,
                            },quantity);
                            openCart();
                            return;
                        }
                        let resp = getItem(data.info.token).quantity;
                        updateItemQuantity(data.info.token,resp+quantity)
                       

                       
                        openCart();
                    }}>
                        Agregar al Carrito
                    </button >
                </div>
                <div className="description">
                {data?.info.descripcion}
                </div>
            </div>
        </div>
    </PhotoProvider>
}
export {Producto};