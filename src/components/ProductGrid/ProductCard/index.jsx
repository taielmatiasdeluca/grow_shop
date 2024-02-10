//Context
import { GrowContext } from '../../growContext';
import { useContext } from "react";

import { useNavigate } from 'react-router-dom';

import './card.css';

function ProductCard({product}){
    const {
        apiUrl  
    } = useContext(GrowContext);

    const navigate = useNavigate();

    return (
    <div className='product_card' onClick={()=>{navigate(`/product/${product.token}`)}}>
        <div className="image_container">
            <img src={`${apiUrl}${product.img}`} alt="" />
        </div>
        <div className="info">
            <div className="title">{product.titulo}</div>
            <div className="price">${product.precio}</div>
        </div>
    </div>
    )
}


export {ProductCard};