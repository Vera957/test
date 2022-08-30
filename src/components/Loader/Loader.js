import React from "react";
import "styles/style.css";


export const Loader = () => {
    return (<>
        <div className="Overlay">
            <div className="Modal">
                <div className="Loader"></div>
            </div>
        </div>
    </>)
}

//no props