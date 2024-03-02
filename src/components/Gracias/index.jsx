import './gracias.css';
import { useCart } from "react-use-cart";

//Context
import { GrowContext } from '../growContext';
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Gracias(){
    const navigate = useNavigate();
    const {
        apiUrl,
        closeLoader,
        
    } = useContext(GrowContext);
    const {
        emptyCart
    } = useCart();
    emptyCart();
    closeLoader();
    return <div id="gracias">
        <h1>Gracias</h1>
        <p>Muchas gracias por confiar nosotros,
             uno de nuestros empleados se contactara con usted, 
             en su correo electronico se encuentra mas informacion al respecto y medios de contacto.
        </p>
        <button onClick={()=>{
                        navigate('/');
                    }}>
                        Volver al inicio
                    </button>

    </div>
}

export {Gracias}