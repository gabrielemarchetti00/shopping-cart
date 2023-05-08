import React from "react";
import './App.css'
import uniqid from "uniqid";
import ballImg from "./images/ball.jpg"
import bandImg from "./images/band.webp"
import shirtImg from "./images/shirt.jpg"
import shoesImg from "./images/shoes.jpg"

function Shop() {
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
    return (
      <div>
        <div id="cart-bar">
          <div>Shopping cart: 0</div>
          <button>Checkout and Pay</button>
        </div>
        <div id="items-section">

        </div>
      </div>
    );
  }
  
  export default Shop;
  