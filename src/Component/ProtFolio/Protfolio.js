import Card from './../../ResuseableCom/Card';
function PortFolio(){

return(
    <div className="container my-5">
        <div><h2>PortFolio</h2></div>
        <div className="row  justify-content-center ">
            <Card backgroundColor="gray" h4="Web Design"/>
            <Card backgroundColor="#282c34" h4="Web Design"/>
            <Card backgroundColor="gray" h4="Web Design"/>
            <Card backgroundColor="#282c34" h4="Web Design"/>
            <Card backgroundColor="gray" h4="Web Design"/>
            <Card backgroundColor="#282c34" h4="Web Design"/>
        </div>
    </div>
)
}

export default PortFolio