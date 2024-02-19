import './gracias.css';

//Context
import { GrowContext } from '../growContext';
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Gracias(){
    const {
        apiUrl,
        closeLoader,
    } = useContext(GrowContext);
    closeLoader();
    return <div id="gracias">
        <h1>Gracias</h1>
        <p>Muchas gracias por nosotros,
             uno de nuestros empleados se contactara con usted, 
             en su correo electronico se encuentra mas informacion al respecto y medios de contacto.
        </p>

    </div>
}

export {Gracias}