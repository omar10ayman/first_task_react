import ProcessBar from './../../ResuseableCom/ProcessBar';
function Skills(){
return(
    <div className="container-fluid bg-secondary">
       <div className="container py-5">
       <h2>Skills</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, praesentium. Reiciendis, laborum recusandae quaerat, tenetur quam vero vel inventore rem cumque corporis, culpa quasi repellat. Quisquam officia ex ad omnis provident sint, sapiente neque quaerat iure libero? Voluptas officiis reiciendis est consequatur </p>
       </div>
       <div className="row py-3">
        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
        <h4>My Foucs</h4>
        <hr style={
            {
              height:"5px",
              width:"75%",
              backgroundColor:"white",
            }
        }/>
        <ul className=" list-unstyled " style={
            {
                fontWeight:"700",
                fontSize:"20px",
            }
        }>
            <li>UI/UX Desgin</li>
            <li>Responsive Desgin</li>
            <li>Web Desgin</li>
            <li>Mobile App Desgin</li>
        </ul>
        </div>
        <div  className="col-8 d-flex flex-column justify-content-center">
            <ProcessBar width="25" text="HTML" />
            <ProcessBar width="50" text="Css" />
            <ProcessBar width="35" text="JavaScript" />
            <ProcessBar width="75" text="JQuary" />
            <ProcessBar width="80" text="React" />
        </div>
       </div>
    </div>
)
}
 
export default Skills