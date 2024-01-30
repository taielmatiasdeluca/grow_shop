import './header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
function Header(props){

    function handleMenu(){
        console.log('Hola soy menu')
    }

    function handleCart(){

    }

    
    return <header>
        <GiHamburgerMenu onClick={handleMenu} color='#ffffff'/>
        <div id='logo'>
            Hola soy logo
        </div>

        <IoMdCart onClick={handleCart} color='#ffffff' />
        

    </header>
}

export {Header}