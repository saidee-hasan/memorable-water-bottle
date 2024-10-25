import React from 'react'
import"./Bottle.css"
function Bottle({items}) {

 const{name,img,price}= items;
  return (
    <div className='border p-3'>
       <h2>{name}</h2>
        <img className='max-auto' src={img} alt="" />
        <p>Price : {price}</p> 
        <button>Purcess</button>
    </div>
  )
}

export default Bottle
