import React, { useState } from 'react'
import ChairIcon from '@mui/icons-material/Chair';
import "./Home.css"
import Button from '@mui/material/Button';
import bookmyshow from "./Bookmyshow.json"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate= useNavigate();
  
  const [color,setColor]=useState("grey");
  const [selected,setSelected]=useState("");
  const handlelogout=()=>{
       localStorage.removeItem("userName");
       localStorage.removeItem("password");
      navigate("/")
  } 
  console.log(bookmyshow)
   const handleclick=(id)=>{
       if(selected.id===id){
  
            setColor("green")
       }
      
   }   
    
  return (
    <>
    <Button variant="contained" onClick={()=>handlelogout()}>LogOut</Button>
    {bookmyshow?.map((id)=>(
    
            <div className='book' key={id}> 
                     <ChairIcon    style={{color:color  }} onClick={() => handleclick()}  />
            </div>
           
    ))}
  </>       
 
     

      
      
    
       
   
  )
}

export default Home
