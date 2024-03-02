import './menu.css';
//Context
import { GrowContext } from '../../growContext';
import { useContext ,useState} from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useFetch } from '../../hooks/useFetch';
import {  Slide } from "react-awesome-reveal";



function Menu(props){
    const navigate = useNavigate();
    const {
        closeMenu,
        apiUrl,
        categorias,
    } = useContext(GrowContext);

    const [posY,setPosY] = useState(0);

 
    
    return (
    <div id="menu_wrapper">
        <div className='menu_window' >
            <div className="closeContaner">
                <IoMdClose onClick={closeMenu} />
            </div>
            <div className="categoria_list">
                {categorias?.map(categoria=>(<div className="categoria" key={categoria.idCategoria} onClick={()=>{
                    navigate(`/categoria/${categoria.idCategoria}`)
                    closeMenu();
                    }}>
                    {categoria.name}
                </div>))}
            </div>
        </div>
    </div>
    )
}

export {Menu}