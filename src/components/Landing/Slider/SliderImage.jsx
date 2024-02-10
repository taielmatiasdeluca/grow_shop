import './SliderImage.css';

function SliderImage({image_url,text}){
    return <div className="sliderImage_container">
        <img src={image_url} className="sliderImage" alt="" />
        <div className="sliderImage_text">{text}</div>
    </div>


}

export {SliderImage}