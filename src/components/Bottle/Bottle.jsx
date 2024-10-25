import React from 'react'
import"./Bottle.css"
function Bottle({items,handleAddToCart}) {

 const{name,img,price}= items;
  return (
    <div className='border p-3'>
       <h2>{name}</h2>
        <img className='max-auto' src={img} alt="" />
        <p>Price : {price}</p> 
        <button onClick={()=>handleAddToCart(items)} className='w-full h-8 rounded-md text-white bg-slate-600'>Purchase</button>
    </div>
  )
}

export default Bottle
