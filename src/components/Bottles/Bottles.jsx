import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStroge,  removeFormLS } from "../../utilities/localStoges";
import Cart from "../Cart/Cart";
function Bottles() {
  const [cart, setCart] = useState([]);
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  console.log(bottles);

  useEffect(() => {
    console.log("call");

    if (bottles.length) {
      const storeCart = getStroge();
const saveCart = []
      for (const id of storeCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);

        if (bottle) {
         saveCart.push(bottle)
        }
      }
  setCart(saveCart)
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];

    addToLS(bottle.id);

    setCart(newCart);
  };

const handleRemove =(id)=>{
  const remCart = cart.filter(bottle=> bottle.id !== id)
 setCart(remCart)
  removeFormLS(id)

}

  return (
    <div className="mx-auto container">
      <Cart  cart={cart} handleRemove={handleRemove}/>
      <h2 className="text-center text-2xl p-10">
        Bottles Available {bottles.length}
      </h2>

    

      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 items-center  ">
        {bottles.map((item, index) => (
          <Bottle handleAddToCart={handleAddToCart} key={index} items={item} />
        ))}
      </div>
    </div>
  );
}

export default Bottles;
