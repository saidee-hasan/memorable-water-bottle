import React from 'react'

function Cart({cart}) {
  return (
    <div>
        <h3 className="text-center text-2xl p-10">Card Added {cart.length}</h3>
   <div className="grid lg:grid-cols-7 grid-cols-3 md:grid-cols-4  gap-4">
   
   {
    cart.map(p=><img  src={p.img} alt=''/>)
   }
   </div>
   
    </div>
  )
}

export default Cart
