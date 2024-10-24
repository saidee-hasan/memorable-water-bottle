import React from 'react'
import"./Bottle.css"
function Bottle({items}) {

 const{name,img,price}= items;
  return (
    <div className='bottle'>
       <h2>{name}</h2>
        <img src={img} alt="" />
        <p>Price : {price}</p> 
    </div>
  )
}

export default Bottle
