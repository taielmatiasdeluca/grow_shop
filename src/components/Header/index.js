import './header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
//Context
import { GrowContext } from '../growContext';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';


function Header(props){
    const navigate = useNavigate();
    const {
        openMenu,
        openCart
    } = useContext(GrowContext);


 

    
    return (
  
        <header>

            <GiHamburgerMenu onClick={openMenu} color='#ffffff'/>
            <div id='logo' onClick={()=>{navigate('/')}}>
                Hola soy logo
            </div>

            <IoMdCart onClick={openCart} color='#ffffff' />
        </header>
  

    )
}

export {Header}