import './main.css';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function QuantityControl({value,setValue}){
    
    return (
        <div className="quantity_control">
            <div className="button">
                <FaPlus onClick={()=>{setValue(value+1)}}/>
            </div>
            <input type="number" value={value} onChange={(e)=>{
                let num = e.target.value;
                num = parseInt(num)
                if(typeof num === 'number' && isFinite(num)){
                    setValue(num)
                }
            }} />
            <div className="button">
                <FaMinus onClick={()=>{if(value > 1) setValue(value-1);}}/>
            </div>

        </div>
    );
}

export {QuantityControl}