import React from "react";
import { useState } from "react";
import './App.css'
import uniqid from "uniqid";
import ballImg from "./images/ball.webp"
import bandImg from "./images/band.webp"
import shirtImg from "./images/jersey.webp"
import shoesImg from "./images/shoes.webp"

const itemsArray = [
  {
    id: uniqid(),
    title: 'Shoe',
    image: shoesImg,
    num: 0
  },
  {
    id: uniqid(),
    title: 'Ball',
    image: ballImg,
    num: 0
  },
  {
    id: uniqid(),
    title: 'Headband',
    image: bandImg,
    num: 0
  },
  {
    id: uniqid(),
    title: 'Jersey',
    image: shirtImg,
    num: 0
  }
]

function Shop() {
  const [items, setItems] = useState(itemsArray)
  const [total, setTotal] = useState(0)

  function handleInput(e){
    e.preventDefault()
    setItems(items.map(function(item) {
      if(item.id === e.target.id) {
        item.num = e.target.value
      }
      return item
    }))
  }

  function handlePlus(e){
    e.preventDefault()
    setItems(items.map(function(item) {
      if(item.id === e.target.id) {
        item.num ++
      }
      return item
    }))
  }

  function handleMinus(e){
    e.preventDefault()
    setItems(items.map(function(item) {
      if(item.id === e.target.id) {
        if(item.num > 0) {
          item.num --
        }
      }
      return item
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    items.forEach((item) => {
      if(item.id === e.target.id) {
        setTotal(Number(total) + Number(item.num))
      }
    })
  }

  function handleCheck(e) {
    e.preventDefault()
  }
  
  return (
      <div>
        <div id="cart-bar">
          <div>Shopping cart: {total}</div>
          <button id="cart-btn" onClick={handleCheck}>Checkout and Pay</button>
        </div>
        <div id="items-section">
          {items.map((item) => {
            return <div className="item" key={item.id}>
              <div className="item-title">{item.title}</div>
              <img className="item-img" src={item.image} alt="item"></img>
              <div>
                <form onSubmit={handleSubmit} id={item.id}>
                  <div>
                    <label>Type the number of items you want: </label>
                    <input value={item.num} onChange={handleInput} id={item.id}/>
                    <button className="plus" onClick={handlePlus} id={item.id}>+</button>
                    <button className="minus" onClick={handleMinus} id={item.id}>-</button>
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
  