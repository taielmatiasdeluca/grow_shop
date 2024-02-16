import './landing.css';

import { Slider } from "./Slider"
import {useFetch} from '../hooks/useFetch';

//Custom Components
import { ProductGrid } from '../ProductGrid';
//Context
import { GrowContext } from '../growContext';
import { useContext } from "react";

function Landing(props){
  const {
    apiUrl,
    closeLoader,
  } = useContext(GrowContext);

  const {data:productos_portada} = useFetch(`${apiUrl}producto/getPortade`);
  const {data:productos_destacados} = useFetch(`${apiUrl}producto/get`);
  console.log(productos_portada);

  if(productos_portada && productos_destacados){
    closeLoader();
  }

  return <div id="landing">
    <div id="slider_container">
      {productos_portada && <Slider productos={productos_portada} />}
    </div>
    <div id="landing_products">
      <h2 className='subtitle'>Productos Destacados</h2>
      {productos_destacados && <ProductGrid productos={productos_destacados}/>}
    </div>
    
  </div>

}

export {Landing}