import React from 'react';
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';


const GrowContext = React.createContext();

function GrowProvider({ children }) {
  const apiUrl = "http://d.taieldeluca.com.ar:81/growApi/";


  const [menu,setMenu] = useState(false)
  const [cart,setCart] = useState(false)

  function openMenu(){
    setMenu(true);
  }
  function closeMenu(){
    setMenu(false);
  }
  function openCart(){
    setCart(true);
  }
  function closeCart(){
    setCart(false);
  }




  const {data:categorias} = useFetch(`${apiUrl}/categoria/get`);


  

  return (

    <GrowContext.Provider value={{
      apiUrl,

      menu,
      openMenu,
      closeMenu,
      
      cart,
      openCart,
      closeCart,
      categorias,
    }}>
      {children}
    </GrowContext.Provider>
  );
}

export { GrowContext, GrowProvider };
