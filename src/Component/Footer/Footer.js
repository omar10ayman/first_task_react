import Button from './../../ResuseableCom/Button';
function  Footer(){
    return(
        <div className="container-fluid py-5" style={{backgroundColor:"black"}}>
            <div className="container">
                <div className="row">
                    <div className="col-3 text-white">
                        <h5>Get In Touch</h5>
                        <p>omar@gmail.com</p>
                        <p>01554450445</p>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <Button text="Contact Me "/>
                    </div>
                    <div className="col-3 text-white">
                        <h5><span>Logo1</span><span>Logo2</span><span>Logo3</span></h5>
                        <p>copyrigh&copy;2019</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;