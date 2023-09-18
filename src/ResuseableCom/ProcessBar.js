function ProcessBar(props){
    return(
        <div>
        <div class="progress my-1">
        <div class="progress-bar" role="progressbar" style={{
            width:`${props.width}%`,
            
        }} aria-valuenow={props.width} aria-valuemin="0" aria-valuemax="100">{props.text}</div>
        </div>
        </div>
    )
}
export default ProcessBar