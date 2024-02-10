import './grid.css';

import { useNavigate } from 'react-router-dom';


//Context
import { GrowContext } from '../growContext';
import { useContext } from "react";

import { ProductCard } from './ProductCard';

function ProductGrid({productos}){
    const {
        apiUrl  
    } = useContext(GrowContext);

    const navigate = useNavigate();
    return (
        <div className='product_grid'>
            {productos.map(product => <ProductCard product={product} />)
            }

        </div>
    );
}

export {ProductGrid};