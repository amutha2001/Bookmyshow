import React, { useState } from 'react'
import Button from "@mui/material/Button";


const Home = () => {
  const [color,setColor]=useState("red");
     
  return (
    <>
     <Home color={color} />   
      <div className='book'>
       
        <Button
            
            type="submit"
            variant="contained"
            onClick={() => {setColor("green")}}
          >
            click
      </Button>
    </div>
   </>     
       
   
  )
}

export default Home
