import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import Home from './Home'
import Login from './Login'
const Parent = () => {
  return (
    <div>
      <BrowserRouter>
           <Routes>
               
               <Route path="/" element={<Login/>}  ></Route>
               <Route path="/Home" element={<Home/>}  ></Route>
               <Route path="/detail" element={<Detail/>}  ></Route>
           </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Parent
