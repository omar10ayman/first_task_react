function Card(props){
    return(
        <div className="col-4 m-3" style={
            {
                width:"350px",
                height:"350px",
                backgroundColor:`${props.backgroundColor}`,
                position:"relative",
                color:"white"
            }
        }>
            <h4 style={{
                position:"absolute",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)",
                // textAlign:"center",
            }}>{props.h4}</h4>
        </div>
    )
}

export default Card