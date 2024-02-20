import { Routes,Route,BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";


//Main styles
import './static/css/main.css';
import './static/css/variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Context
import { GrowContext } from './components/growContext';
import { useContext, useEffect } from "react";

//React Imports
import { Landing } from "./components/Landing";
import { NotFound } from "./components/NotFound";

import { Header } from "./components/Header";
import { Menu } from "./components/Header/Menu";
import { Cart } from "./components/Header/Cart";


import { Categoria } from "./components/Categoria";
import { Producto } from "./components/Producto";
import { Comprar } from "./components/Comprar";
import { Loader } from "./components/Loader";
import { Gracias } from "./components/Gracias";

function App() {
  const {
    menu ,
    cart,
    apiUrl,
    loader,
    openLoader,
  } = useContext(GrowContext);

  const location = useLocation();
  useEffect(()=>{
    openLoader();
  },[location])

  return (
    <>
      {loader && <Loader/>}
      {menu && <Menu/>}
      {cart && <Cart/>}
      <Header  />
      <Routes  >
        <Route exact  path="" element={<Landing />} />
        <Route exact  path="comprar" element={<Comprar />} />
        <Route exact  path="categoria/:idCategoria" element={<Categoria />} />
        <Route exact  path="producto/:token" element={<Producto />} />
        <Route exact  path="gracias" element={<Gracias />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
  </>  
  );
}

export default App;
