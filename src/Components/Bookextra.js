import React from "react";

import { useState } from "react";


import "./Bookcss.css"

function Bookextra(props){
    
    

   

    return(
    <div>
        
     
     <h4> <b>Author:</b>  {props.author}</h4>
     <h4> <b>Review:</b>  {props.review}</h4>
     <h4> <b>Description:</b>  {props.description}</h4>
     
    
    </div>
    );  
}

export default Bookextra;