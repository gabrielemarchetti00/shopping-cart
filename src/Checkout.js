import React from "react";
import './App.css'

function Checkout(props) {
    if(props.show === true) {
        return <div id="checkout">
            <div>
                {props.items.map((item) => {
                    if(item.num !== 0) {
                        return <div id="checkout-items">{item.title} - {item.num}</div>
                    }
                    else return <div></div>
                })}
            </div>
            <button id="pay-btn">Pay</button>
        </div>
    }
}

export default Checkout