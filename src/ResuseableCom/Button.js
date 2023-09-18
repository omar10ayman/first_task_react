import { Component } from "react";

function Button(props) {
    return(
        <button 
        className="btn btn-info"
        >{props.text}</button>
    )
}

export default Button;