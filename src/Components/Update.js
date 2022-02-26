import React, { useState } from "react";
import Form from "./Form";
import Editform from "./Editform";

function Update(props){
    const[edit,setedit] = useState(false)
function handleupdate(){
    setedit(true)
    
}

    return(
        <div>
            <button onClick={handleupdate}>Edit</button>
           {edit && <Editform url={props.url} name={props.name} price={props.price} ></Editform> }
          
        </div>
    )
}

export default Update