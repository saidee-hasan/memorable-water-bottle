import React from 'react'
import PropTypes from 'prop-types'; // ES6
function Cart({cart,handleRemove}) {
  return (
    <div>
        <h3 className="text-center text-2xl p-10">Card Added {cart.length}</h3>
   <div className="grid lg:grid-cols-7 grid-cols-3 md:grid-cols-4  gap-4">
   
   {
    cart.map(p=><div key={p.id}>
        <img  src={p.img} alt=''/>
        <button className='w-full h-8 rounded-md text-white bg-slate-600' onClick={()=>handleRemove(p.id)}>Remove</button>
    </div>)
   }
   </div>
   
    </div>
  )
}
// Cart.PropTypes={
//     cart : PropTypes.object.isRequired,
    
// }

export default Cart;
