//Context
import { GrowContext } from '../growContext';
import { useContext, useState } from "react";

function NotFound(props){
    const {
        closeLoader
    } = useContext(GrowContext);
    closeLoader();

    return (<h1>No se encontro la web</h1>)


}

export {NotFound}