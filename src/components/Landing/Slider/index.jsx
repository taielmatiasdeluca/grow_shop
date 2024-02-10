import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

import './slider.css';

//Context
import { GrowContext } from '../../growContext';
import { useContext } from "react";

function Slider({productos}){
  const {
    apiUrl  
  } = useContext(GrowContext);

  const navigate = useNavigate();
  let number = 0;

  return (
    <>
    <MDBCarousel showIndicators showControls fade>
      {productos.map(product => {
        number += 1;
        return (
            <MDBCarouselItem itemId={number}  onClick={()=>{navigate(`/product/${product.token}`)}}>
              <img src={`${apiUrl}${product.image}`}  className='d-block w-100 image_slider_portade' alt='...' />
            </MDBCarouselItem>
        )}
      )}
    </MDBCarousel>
    </>
    

  )


}

export {Slider}