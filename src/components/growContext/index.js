import React from 'react';
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const GrowContext = React.createContext();

function GrowProvider({ children }) {
  const apiUrl = "http://d.taieldeluca.com.ar:81/growApi/";

  return (

    <GrowContext.Provider value={{
      apiUrl
    }}>
      {children}
    </GrowContext.Provider>
  );
}

export { GrowContext, GrowProvider };
