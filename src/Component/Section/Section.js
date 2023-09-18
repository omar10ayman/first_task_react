import { Component } from "react";
import img1 from "../../images/download (2).jpg";
import Button from './../../ResuseableCom/Button';


function Section(){
    return(
      <div className="container-fluid" style={
        {
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "400px",
            width:"100%",
            position: "relative",

        }
        
      }>
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
        }}>
            <h1>
                Omar Mohammed Ayman
            </h1>
            <p>
                FrontEnd Developer using Reactjs
            </p>
            <Button text="Contact Us" />
        </div>
      </div>
    )
}

export default Section;