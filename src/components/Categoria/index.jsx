import { useParams } from 'react-router-dom';
import './categoria.css';

import { FaFilter } from "react-icons/fa";
import Select from 'react-select';
//Self components

//Context
import { GrowContext } from '../growContext';
import { useContext, useState } from "react";
import { useFetch } from '../hooks/useFetch';
import { ProductGrid } from '../ProductGrid';


function parseSelect(categoria){
    return {'value':categoria.idCategoria,'label':categoria.name};
}


const dateOptions = [
    {'value':'all','label':'Todos'},
    {'value':'old','label':'Mas Viejo'},
    {'value':'new','label':'Mas Nuevo'},
]

function Categoria(){
    const {
        apiUrl,
        categorias
    } = useContext(GrowContext);

    const [filtros,setFiltros] = useState();



    const {idCategoria} = useParams();

    const {data:categoria} = useFetch(`${apiUrl}/categoria/getCategory/${idCategoria}`);
    const {data:productos} = useFetch(`${apiUrl}/categoria/getCategoryProductos/${idCategoria}`);


    console.log(filtros)

    return <div id="categoria">
        <h1>{categoria?.name}</h1>
            <div className="controls">
                {categorias && categoria && 
                <Select
                
                   isMulti
                   defaultValue={parseSelect(categoria)}
                   placeholder="Categorias"
                   name="colors"
                   options={categorias.map(cat=>parseSelect(cat))}
                   className="basic-multi-select"
                   value={filtros}
                   onChange={setFiltros}
                   classNamePrefix="select"
               /> }

               {categorias && categoria && 
                <Select
                
                   isMulti
                   defaultValue={dateOptions[0]}
                   placeholder="Categorias"
                   name="colors"
                   options={dateOptions}
                   className="basic-multi-select"
                 
                   classNamePrefix="select"
               /> }

            </div>
        
                
                
       

        {productos && <ProductGrid productos={productos}/>}
    </div>
}

export {Categoria};