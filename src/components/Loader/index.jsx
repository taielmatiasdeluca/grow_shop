import ReactLoading from "react-loading";

function Loader(){
    return  (
        <div id="main_loader">
            <ReactLoading
            type={"spinningBubbles"}
            color={"#ffffff"}
            height={150}
            width={150}
            />
            
        </div>
    )
}

export {Loader}