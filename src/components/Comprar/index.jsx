import './comprar.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useCart } from "react-use-cart";
import {useState } from 'react'
function Comprar(){
    const {
        totalUniqueItems,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

    const [formData, setFormData] = useState({
        
        cantProducts:5,
        products:[],
        nombre: "string",
        email: "string",
        telefono: false,
    });


    function handleSubmit(e){
        e.preventDefault();
    }

    console.log(items)

    return(
    <div id="comprar">
        <h1>Finalizar Compra</h1>
        <p>Gracias por elegirnos, a continuacion se necesitan los siguientes datos.</p>

        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="tel" placeholder="Ingresa tu telefono" />
            </Form.Group>
        </Form>

        <p>Aqui estan los detalles de tu compra, revisalos correctamente</p>

        <div className="details border">
            <p>Tienes una cantidad de <b>{totalItems}</b> productos</p>
            <div className="items_container">
                {items.map(item=>{
                    return <div className="item">
                        {item.quantity} X {item.name}
                    </div>
                })}
            </div>

           

            
        </div>
        <Form.Group className="my-3">
                <Form.Check
                    required
                    label="Confirmar que estos son los productos que quiero comprar"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    />
        </Form.Group>

        <div className="controls">
            <h5>¿Esta seguro que quiere continuar?</h5>
            <div className="buttons_container">
                <Button variant="danger">Cancelar</Button>
                <Button variant="success" onClick={handleSubmit} className='btn_comprar'>Continuar</Button>
            </div>
        </div>




    </div>)

}

export {Comprar}