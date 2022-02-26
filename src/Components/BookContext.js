import { createContext, useState ,useEffect } from "react";

export const  BookContext = createContext();

export function BookProvider(props){
  const [books,setbooks]=useState(null)
  const [open,setopen] =useState(false)
  
  useEffect(()=>{
    setTimeout(()=>{
      fetch("https://bookshelves.p.rapidapi.com/books", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bookshelves.p.rapidapi.com",
		"x-rapidapi-key": "426ff09f1emsh0631c9ebfa64454p160997jsnda303bef504f"
	}
})
.then((res) => {
   Promise.resolve(res)
   return res.json()
}).then((data) => {
   console.log(data.Books)
   setbooks(data.Books)
   console.log(books)
   setopen(true)
})
    },2000)

  },[])
   
  
    return(
    
         
              <BookContext.Provider  value={[ books,setbooks] }>

              {books && props.children}
            </BookContext.Provider> 
        
              
           

    );
}