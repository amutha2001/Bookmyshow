import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
const Parent = () => {
  return (
    <div>
      <BrowserRouter>
           <Routes>
               
               <Route path="/" element={<Login/>}  ></Route>
               <Route path="/Home" element={<Home/>}  ></Route>
           </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Parent
