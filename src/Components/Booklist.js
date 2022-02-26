import React, { useState } from "react";
import { BookContext } from "./BookContext";
import { useContext } from "react";
import Book from "./Book";
import "./Navcss.css"



function Booklist(){
    const [books,setbooks] = useContext(BookContext);
    const [search,setsearch] = useState('')
    const [searchbtn,setsearchbtn]=useState(false)
    const [searchedelements , setsearchedelements] =useState('')
    const [back,setback]=useState(false)

    function handlesearch(e){
           setsearch(e.target.value)
    }


    function dosearch(){
      setsearchedelements(books)
      console.log(books)
      console.log(search)
      let resultList = books.filter(p=>p.title===search)
      console.log(resultList)
      setbooks(resultList)
      setsearchbtn(true)
      setsearch('')
     
      
      
}
function handleback(){
  setbooks(searchedelements)
  setsearchbtn(false)
}

function dosort(){
  console.log('sorting')
  let resultList = books;
  console.log(resultList)

 

  
 
  const sorted = [...resultList].sort(function (a, b) {
    console.log(a['price'].slice(1,))
    return a['price'].slice(1,)- b['price'].slice(1,)
  });


  
  setbooks(sorted)

   
  
}

  
    
   
      
    return(
        <div className="Nav">
          <div class="input-field">
          <label for="name">search by name:</label>
           <input type="text" id="name" value={search} onChange={handlesearch} />
           
           <button onClick={dosearch}>search</button>
          </div>
        <br />
        <br />
        
           <div>
             <button id="sort_btn" onClick={dosort} >Sort by price</button>
           </div>
        <div>
          
        {books.map((book)=>(
            <>
              <Book  key={book.id} name={book.title} url={book.imgUrl} price={book.price} author={book.author} review={book.review} description={book.description} />
              
            </>
          ) )}
        </div>
        {searchbtn && <div>
          <button id="backbtn" onClick={handleback}>back</button>
          
          </div>}
        </div>
             
     
    );
}

export default Booklist