import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import uniqid from "uniqid";
import ballImg from "./images/ball.webp"
import bandImg from "./images/band.webp"
import shirtImg from "./images/jersey.webp"
import shoesImg from "./images/shoes.webp"

function Shop() {
  let [itemNum, setItemNum] = useState(0)
  const items = [
    {
      id: uniqid(),
      title: 'Shoe',
      image: shoesImg
    },
    {
      id: uniqid(),
      title: 'Ball',
      image: ballImg
    },
    {
      id: uniqid(),
      title: 'Headband',
      image: bandImg
    },
    {
      id: uniqid(),
      title: 'Jersey',
      image: shirtImg
    }
  ]

  useEffect(() => {
    function handlePlus(e) {
      setItemNum(itemNum ++)
    }

    document.querySelector(".plus").addEventListener("click", handlePlus)
  })

    return (
      <div>
        <div id="cart-bar">
          <div>Shopping cart: 0</div>
          <button id="cart-btn">Checkout and Pay</button>
        </div>
        <div id="items-section">
          {items.map((item) => {
            return <div className="item" key={item.id}>
              <div className="item-title">{item.title}</div>
              <img className="item-img" src={item.image} alt="item"></img>
              <div>
                <form>
                  <div>
                    <label>Type the number of items you want: </label>
                    <input value={itemNum} />
                    <button className="plus">+</button>
                    <button className="minus">-</button>
                  </div>
                  <button>Add To Cart</button>
                </form>
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
  
  export default Shop;
  