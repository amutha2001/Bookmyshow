import React from 'react'
import bookmyshow from "./Bookmyshow.json"
import Login from './Login'


const Detail = () => {
  
  console.log("bookmyshow",bookmyshow)
  localStorage.setItem("username",JSON.stringify(bookmyshow.username))
  return (
    <div>
        {bookmyshow?.map((book,index)=>(
             <Login  book={book}  key={index}  />
        ))}
        
    </div>
  )
}

export default Detail
