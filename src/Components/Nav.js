import React, { useContext } from "react";
import { BookContext } from "./BookContext";

function Nav(){
    const [books,setbooks] = useContext(BookContext);
    return(
<h2>there are {books.length} books are present</h2>
    );
}

export default Nav;