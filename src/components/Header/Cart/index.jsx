import './cart.css';
import { IoMdClose } from "react-icons/io";
import { useCart } from "react-use-cart";

import {QuantityControl } from '../../Producto/QuantityControl';

//Context
import { GrowContext } from '../../growContext';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

function Cart(){
    const navigate = useNavigate();
    const {
        closeCart,
        apiUrl,
    } = useContext(GrowContext);

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

  


  

    return <div id="cart">
        <header>
            <div className="closeContaner">
                <IoMdClose onClick={closeCart} />
            </div>
            <h2>Carrito de compras</h2>
        </header>

        <div className="product_list">
            {items.map(prod=>{
                function parseQuantity(item){
                    updateItemQuantity(prod.id,item)
                }
                return <div className="product">
                    <div className="image_container">
                        <img src={`${apiUrl}${prod.img}`} alt="" srcset="" />
                    </div>
                    <div className="info">
                        <div className="title">
                            {prod.name}
                            <span onClick={()=>{
                                removeItem(prod.id)
                            }}>Eliminar</span>
                        </div>
                        <div className="controls">
                            <div className="quantity"><QuantityControl value={prod.quantity} setValue={parseQuantity}/></div>
                            <div className="price">${prod.itemTotal}</div>
                        </div>
                    </div>
                </div>
            })}

        </div>

        <div className="finish">
            <div className="information">
                <span>Total:</span>
                <span>${cartTotal}</span>
            </div>
            <div className="button_container">
                <button onClick={()=>{
                    navigate('/comprar');
                    closeCart();
                }}>
                    Terminar Compra
                </button>
                <div className="more" onClick={()=>{
                    navigate('/');
                    closeCart();
                }}>
                    Ver mas productos
                </div>
            </div>
        </div>

    </div>
}

export {Cart};