import React, { useState } from 'react'
import ChairIcon from '@mui/icons-material/Chair';
import "./Home.css"
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate= useNavigate();
  const [color,setColor]=useState("grey");

  const handlelogout=()=>{
       localStorage.removeItem("userName");
       localStorage.removeItem("password");
      navigate("/")
  } 
       
      
    
  return (
    <>
    <Button variant="contained" onClick={()=>handlelogout()}>LogOut</Button>
    <div className='main'>
        <div className='chair'>
            <div className='book' > 
                    <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
            <div className='book' > 
                  <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
            <div className='book' > 
                  <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
            <div className='book' > 
                  <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
            <div className='book' > 
                  <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
            <div className='book' > 
                  <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
        </div>
        <div className='chair2'>
            <div className='book' > 
                <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
            <div className='book' > 
                <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
            <div className='book' > 
                <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
            <div className='book' > 
                <ChairIcon    style={{color:color  }} onClick={() => setColor("green")}  />
            </div>
        </div>
    </div>
      
  </>       
 
     

      
      
    
       
   
  )
}

export default Home
