import React from "react"
import './Project.css'

export default function Projects(props){
    const [col,setCol]=React.useState(true)
    console.log(col)
    function toggle(){
        setCol(prev=>!prev)
    }
   
    return(
        <div className={ col ? "Project--Dark" : "Project--Light"}  onMouseEnter={toggle} onMouseLeave={toggle}>
             <img src= {props.img} alt="" className="Card--Image"  />
             <h3 className="Project--Title">{props.head}</h3>
             <ul className="Project--List">
                 <li>{props.one}</li>
                 <li>{props.two}</li>
                 <li>{props.three}</li>
             </ul>

        </div>
    );
}