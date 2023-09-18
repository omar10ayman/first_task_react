
import Button from './../../ResuseableCom/Button';

function AboutUs(){
    return(
        <div className="container row my-5">
            <div className="col-4">
            <h2>About Us</h2>
            </div>
            <div className="col-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, praesentium. Reiciendis, laborum recusandae quaerat, tenetur quam vero vel inventore rem cumque corporis, culpa quasi repellat. Quisquam officia ex ad omnis provident sint, sapiente neque quaerat iure libero? Voluptas officiis reiciendis est consequatur </p>
            <br/>
            <Button text="Download CV" />
            </div>
        </div>
    )
}

export default AboutUs;