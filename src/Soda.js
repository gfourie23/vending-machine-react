import React from "react";
import { Link } from "react-router-dom"

function Soda() {
    return (
       <div>  
            <h1>Soda</h1>
            <div>
              <Link to="/">Go Back</Link>
            </div>
       </div>
    )   
}

export default Soda;