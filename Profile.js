import React from "react"
import './Profile.css'

export default function Profile(props){
   
    return(
        <div className= "Profile">
             <img src= {props.pimg} alt="" className="Profile--Image"  />
             <ul className="Skill--List">
                 <li className="L">{props.pone}</li>
                 <li className="L">{props.ptwo}</li>
                 <li className="L">{props.pthree}</li>
             </ul>
             <h3 className="User-id">{props.phead}</h3>

        </div>
    );
}