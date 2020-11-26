import "./flash.styles.scss";
import {useState} from "react";

const Flash = () =>  {
    const [display, setDisplay] = useState("flex");
    return(
        <div className="flash"  style={{display: display}}>
            <h1>Live Coronavirus Death Count By Country</h1>
            <h3>Data taken from https://api.covid19api.com/</h3>
            <button onClick={() => setDisplay("none")}>
                Ok
            </button>
        </div>
    )
}


export default Flash;