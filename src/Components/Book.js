import React from "react";

import { useState } from "react";

import { BookContext } from "./BookContext";
import { useContext } from "react";
import "./Bookcss.css"
import Bookextra from "./Bookextra";

function Book(props){
    const [showmore,setshowmore] = useState(false) 
    const [books,setbooks] = useContext(BookContext);
    const [showbtn,setbtn]=useState(true)
    const [showbtn2,setbtn2]=useState(false)

    function handleshowmore(){
        setshowmore(true)
        setbtn(false)
        setbtn2(true)
    }

    function handleshowless(){
        setshowmore(false)
        setbtn(true)
        setbtn2(false)
    }

    return(
    <div class="card">
        <h1><img src={props.url} alt="Avatar"  /></h1>
     <h3> <b> Book Name:{props.name}</b></h3>
     <p> Price: {props.price}</p>
     
     
    
     {showmore && 
     <div>
         <Bookextra author={props.author} review={props.review} description={props.description}></Bookextra>
        
     </div>}
     <div >
     {showbtn && <div><button id="btnshowmore" onClick={handleshowmore}>showmore</button></div> }
     {showbtn2 &&  <div><button id="btnshowless" onClick={handleshowless}> showless</button></div> }

     </div>
    
     
    
    </div>
    );  
}

export default Book;