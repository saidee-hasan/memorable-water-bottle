import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import"./Bottles.css"
function Bottles() {

    const [bottles,setBottles]=useState([]);
useEffect(()=>{
    fetch("bottles.json")
    .then(res=>res.json())
    .then(data=>setBottles(data))

},[])
console.log(bottles)
  return (
    <div className='mx-auto container'>
      
      <h2>Bottles Here {bottles.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center  ">
      {
        bottles.map((item,index)=>(<Bottle key={index} items={item}/>))
      }</div>
    </div>
  )
}

export default Bottles
