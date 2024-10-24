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
    <div>
      
      <h2>Bottles Here {bottles.length}</h2>
      <div className="conatiner">
      {
        bottles.map((item,index)=>(<Bottle key={index} items={item}/>))
      }</div>
    </div>
  )
}

export default Bottles
