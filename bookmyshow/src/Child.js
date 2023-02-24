import React from 'react'

const Child = (props) => {
  return (
    <div className='child' style={{backgroundColor:"red"}}>
         {props.color}
    </div>
  )
}

export default Child
